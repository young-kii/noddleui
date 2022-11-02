import { ReactNode } from "react";
interface modalProps {
    zoom?: 'in' | 'out';
    open?: boolean;
    title?: string;
    children?: ReactNode;
    draggable?: boolean;
    onCancel?: (value?: any) => any;
    onConfirm?: (value?: any) => any;
}
interface confirmModalProps extends Required<Pick<modalProps, 'title'>>, Partial<Pick<modalProps, 'onConfirm' | 'onCancel'>> {
    content?: string | ReactNode;
    immediatelyCancel?: (value?: any) => any;
    asyncCancel?: (value?: any) => any;
}
export type { modalProps, confirmModalProps };
