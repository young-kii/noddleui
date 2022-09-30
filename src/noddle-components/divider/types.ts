import {ReactNode} from "react";

namespace _Divider {
    export interface dividerProps {
        children?: string | ReactNode
        position?: 'left' | 'center' | 'right'
        spacing?: number
    }
}

export default _Divider