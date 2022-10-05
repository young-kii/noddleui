import {CSSProperties, ReactNode} from "react";

namespace _Divider {
    export interface dividerProps {
        width?: CSSProperties["width"]
        height?: CSSProperties["height"]
        thickness?: number | string
        color?: CSSProperties['color']
        children?: string | ReactNode
        position?: 'start' | 'center' | 'end'
        spacing?: number
        direction?: 'horizontal' | 'vertical'
    }
}

export default _Divider