import React from 'react';

export const TabsContext = React.createContext({
    selectedTab: '',
    setSelectedTab: () => {}
});