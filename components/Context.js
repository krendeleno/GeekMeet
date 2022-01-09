import React from 'react';

export const Context = React.createContext({
    token: '',
    baseUrl: 'http://geekmeet-backend.host1818494.hostland.pro/api/v1',
    isLoading: false
});