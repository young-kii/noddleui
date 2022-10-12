import {CSSProperties} from "react";
import {themeTypes} from "@/types";

interface buttonProps {
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

interface baseButtonProps extends buttonProps{

}

export type { buttonProps, baseButtonProps }