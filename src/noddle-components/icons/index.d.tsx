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
}

export default _Icon