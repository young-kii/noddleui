import { ReactNode } from "react";

interface modalProps {
    open?: boolean
    title?: string
    content?: ReactNode
    onCancel?: (value?: any) => any
    onConfirm?: (value?: any) => any
}

export type {modalProps}