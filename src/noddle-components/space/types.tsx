import {ReactNode} from "react";

interface spaceProps {
    children: ReactNode[] | ReactNode
    direction?: 'horizontal' | 'vertical'
    gap?: number
}

export type {spaceProps}