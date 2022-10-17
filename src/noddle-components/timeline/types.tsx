import React, {ReactNode} from "react";
import {direction, themeTypes} from "@/types";

interface timelineProps {
    direction?: direction
    type?: themeTypes
    timeline: step[] | []
    sort?: (timeline: step[]) => (step[] | [])
}

interface step {
    title: string | ReactNode
    content: {
        main: string | ReactNode
        extra: {
            time?: string | number
            content: string | ReactNode,
            position?: 'footer' | 'behind-title'
        }
    }
}

export type {timelineProps, step}