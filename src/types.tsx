import {ReactNode} from "react";

interface spaceProps {
    children: ReactNode[] | ReactNode
    direction?: 'horizontal' | 'vertical'
    gap?: number
    width?: 'max-content' | number | string
    height?: 'max-content' | number | string
}

export type {spaceProps}