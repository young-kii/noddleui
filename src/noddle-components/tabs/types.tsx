import React from "react";

type onAdd = (newTab: tab, callBack?: (newItems: tab[], items: tab[]) => void) => void
type onRemove = (remove: (key: React.Key, newItems: tab[], items: tab[]) => void) => void
type onRename = (rename: (label: string) => void) => void

interface tabsProps {
    items: tab[]
    type?: 'default' | 'card'
    currentTab?: React.Key
    outlined?: boolean
    showAdd?: boolean
    centered?: boolean
    onEdit?: (add: onAdd, remove: onRemove, rename: onRename) => void
}

interface tab {
    key: React.Key
    label: string
    closable?: boolean
    editable?: boolean
    disabled?: boolean
    children: React.ReactNode | string
}

export type {tabsProps, tab}