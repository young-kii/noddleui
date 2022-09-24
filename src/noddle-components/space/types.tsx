import {ReactNode} from "react";

interface spaceProps {
    children: ReactNode[]
    direction?: 'horizontal' | 'vertical'
    gap?: number
}

export type {spaceProps}