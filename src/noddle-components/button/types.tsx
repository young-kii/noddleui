import {CSSProperties} from "react";
import {commonColors} from "@/noddle-components/commonTypes";

interface buttonProps {
    children: any;
    onClick?: () => any
    type?: commonColors,
    border?: 'default' | 'solid' | 'dashed' | 'text'
    disabled?: boolean
    backgroundStyle?: 'default' | 'none' | 'border'
    noPadding?: boolean
    textWidth?: boolean
}

interface baseButtonProps extends buttonProps{

}

export type { buttonProps, baseButtonProps }