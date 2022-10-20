import {CSSProperties} from "react";
import {themeTypes} from "@/types/common";

namespace _Icon {
    export interface baseIconProps {
        onClick?: (value?: any) => any
        theme?: themeTypes
        width?: number,
        height?: number,
        color?: CSSProperties["color"]
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