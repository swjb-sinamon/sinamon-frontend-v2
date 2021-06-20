import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Api from '../apis';
import { ProfileType } from '../types/ApiResponse';

const context = createContext<ProfileType | undefined>(undefined);

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined);

  const fetchProfile = useCallback(async () => {
    const res = await Api.get('/auth/me');
    setProfile(res.data.data);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return <context.Provider value={profile}>{children}</context.Provider>;
};

export const useProfile = () => useContext(context);
