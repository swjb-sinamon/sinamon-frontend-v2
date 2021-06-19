import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from './ApiErrorMessage';

const host = process.env.REACT_APP_API_HOST || 'http://localhost:8080';

const Api = axios.create({
  baseURL: host,
  withCredentials: true
});

const Message = {
  LATER: '잠시후 다시 시도해주세요.',
  BAD_REQUEST: '요청 방법이 잘못 되었습니다. 관리자에게 문의해주세요.'
};

Api.interceptors.response.use(
  (res) => {
    if (res.data && !res.data.success) {
      toast.error(Message.LATER);
    }

    return res;
  },
  (e) => {
    if (!e.response || !e.response.data) return Promise.reject(e);

    const { error } = e.response.data;

    if (error === undefined || error === null) return Promise.reject(e);
    if (error === ErrorMessage.NO_PERMISSION) return Promise.reject(e);

    const isValidatorError = e.response.status === 400 && error.errors !== undefined;
    if (isValidatorError) {
      toast.error(Message.BAD_REQUEST);
      return Promise.reject(e);
    }

    toast.error(error);

    return Promise.reject(e);
  }
);

export default Api;
