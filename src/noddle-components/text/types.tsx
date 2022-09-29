import {commonColors} from "@/noddle-components/commonTypes";
import {MouseEventHandler} from "react";

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
    }
}

export default _Text