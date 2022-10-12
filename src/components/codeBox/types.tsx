import {ReactNode} from "react";

namespace _CodeBox {
    export interface codeBoxProps {
        config?: ReactNode
        code: string;
        position?: 'left' | 'right' | 'center';
        children: ReactNode[] | ReactNode
        onReset?: () => any
        height?: number
        width?: number | string | 'max-content'
        isConfigChanged?: boolean
    }
}

export default _CodeBox