import React from "react";
interface tabsProps {
    currentTab?: React.Key;
    items: tab[];
    outlined?: boolean;
    extendable?: boolean;
    type?: 'default' | 'card';
}
interface tab {
    key: React.Key;
    label: string;
    children: React.ReactNode | string;
    closable?: boolean;
}
export type { tabsProps, tab };
