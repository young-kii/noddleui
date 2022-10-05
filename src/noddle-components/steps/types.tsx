import React, {ReactNode} from "react";
import {direction, themeTypes} from "@/types";

interface stepsProps {
    direction?: direction
    type?: themeTypes
    steps: step[] | []
}

interface step {
    title: string | ReactNode
    content: {
        main: string | ReactNode
        extra: {
            content: string | ReactNode,
            position?: 'footer' | 'behind-title'
        }
    }
}

export type {stepsProps, step}