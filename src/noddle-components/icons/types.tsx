import {CSSProperties} from "react";

namespace _Icon {
    export interface baseIconProps {
        width?: number,
        height?: number,
        color?: string,
        spin?:boolean,
        style?: CSSProperties,
    }
    export interface arrowDownProps extends baseIconProps{
        active?: boolean
    }
    export const BASE_HEIGHT = 20
    export const BASE_WIDTH = 20
}

export default _Icon