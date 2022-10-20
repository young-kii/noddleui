import {ReactNode} from "react";
import {size, themeTypes} from "@/types/common";

namespace _Tooltips {
    export interface tooltipsProps {
        children: ReactNode
        tips: string
        theme?: themeTypes
        size?: size
        handleMouseEnter?: (value?: any) => any
        handleMouseLeave?: (value?: any) => any
    }
}

export default _Tooltips