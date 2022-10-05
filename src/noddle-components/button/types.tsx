import {CSSProperties} from "react";
import {commonColors} from "@/noddle-components/commonTypes";

interface buttonProps {
    widthFitsText?: boolean;
    children: any;
    onClick?: () => any
    type?: commonColors,
    border?: 'default' | 'solid' | 'dashed' | 'text'
    disabled?: boolean
    backgroundStyle?: 'default' | 'none' | 'border'
    block?: boolean
    clickEffect?: 'currentColor' | 'default' | 'none'
}

interface baseButtonProps extends buttonProps{

}

export type { buttonProps, baseButtonProps }