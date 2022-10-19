import {ReactNode} from "react";

interface badgeProps {
    children: ReactNode
    count?: number
    onChange?: () => void
    overflowCount?: number
}

export type {badgeProps}