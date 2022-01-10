import React from 'react';

export const Context = React.createContext({
    token: '',
    userId: 1,
    baseUrl: 'http://geekmeet-backend.host1818494.hostland.pro/api/v1',
    isLoading: false,
    isFirst: false,
    isInfoModalVisible: false,
    textModal: '',
    infoModal: ''
});