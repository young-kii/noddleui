import {ReactNode} from "react";

namespace _CodeBox {
    export interface codeBoxProps {
        config?: ReactNode
        code: string;
        position?: 'left' | 'right' | 'center';
        children: ReactNode[] | ReactNode
        height?: number
        width?: number | string | 'max-content'
    }
}

export default _CodeBox