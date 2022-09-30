import {commonColors} from "@/noddle-components/commonTypes";
import {CSSProperties, MouseEventHandler} from "react";
import {DataType} from "@/types";

namespace _Text {
    export interface textProps {
        children: string
        type?: commonColors
        pure?: boolean
        bolder?: boolean
        decoration?: 'underline' | 'through' | 'overline' | 'none'
        lineType?: 'solid' | 'dashed' | 'dotted'
        isButton?: boolean
        onClick?: MouseEventHandler<HTMLSpanElement>
        fontSize?: number
        color?: string
    }
}

export default _Text