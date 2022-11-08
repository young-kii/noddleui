import {themeTypes} from "@/types/common";
import React from "react";

interface buttonProps extends Omit<React.HTMLAttributes<any>,'type' | 'onClick'>{
    widthFitsText?: boolean;
    children: any;
    onClick?: (value?: any) => any
    type?: themeTypes,
    border?: 'default' | 'solid' | 'dashed' | 'text'
    disabled?: boolean
    backgroundStyle?: 'default' | 'none' | 'border'
    block?: boolean
    clickEffect?: 'currentColor' | 'default' | 'none'
}

export type { buttonProps }


