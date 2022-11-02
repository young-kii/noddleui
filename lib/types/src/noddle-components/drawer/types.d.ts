import { ReactNode } from "react";
interface drawerProps {
    zoom?: 'in' | 'out';
    open?: boolean;
    title?: string;
    children?: ReactNode;
    draggable?: boolean;
    onCancel?: (value?: any) => any;
    onConfirm?: (value?: any) => any;
}
export type { drawerProps };
