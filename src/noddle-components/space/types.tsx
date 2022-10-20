import {CSSProperties, ReactNode} from "react";
import {direction} from "@/types/common";

interface spaceProps {
    onClick?: (value?: any) => any
    style?: CSSProperties
    children: ReactNode[] | ReactNode
    direction?: direction
    gap?: number
    width?: CSSProperties["width"]
    height?: CSSProperties["height"]
}

export type {spaceProps}