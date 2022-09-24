import {ReactNode} from "react";

namespace _CodeBox {
    export interface codeBoxProps {
        code: string;
        position?: 'left' | 'right' | 'center';
        children: ReactNode[] | ReactNode
    }
}

export default _CodeBox