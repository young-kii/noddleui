import {CSSProperties} from "react";

interface buttonProps {
    children: any;
    style?: CSSProperties;
    onClick?: () => any
    type?: 'default' | 'danger' | 'success' | 'primary' | 'warning',
    border?: 'default' | 'solid' | 'dashed' | 'text'
    disabled?: boolean
    backgroundStyle?: 'default' | 'none' | 'border'
}

interface baseButtonProps extends buttonProps{

}

export type { buttonProps, baseButtonProps }