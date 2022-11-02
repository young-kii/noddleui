import { CSSProperties, ReactNode } from "react";
declare namespace _Divider {
    interface dividerProps {
        width?: CSSProperties["width"];
        height?: CSSProperties["height"];
        thickness?: number | string;
        color?: CSSProperties['color'];
        children?: string | ReactNode;
        position?: 'start' | 'center' | 'end';
        spacing?: number | string;
        direction?: 'horizontal' | 'vertical';
    }
}
export default _Divider;
