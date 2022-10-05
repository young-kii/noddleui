import {CSSProperties, MouseEventHandler} from "react";
import {DataType, themeTypes} from "@/types";

namespace _Text {
    export interface textProps {
        children: string
        type?: themeTypes
        pure?: boolean
        bolder?: boolean
        decoration?: 'underline' | 'through' | 'overline' | 'none'
        lineType?: 'solid' | 'dashed' | 'dotted'
        isButton?: boolean
        onClick?: MouseEventHandler<HTMLSpanElement>
        fontSize?: number
        color?: CSSProperties["color"]
    }
}

export default _Text