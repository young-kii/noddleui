interface buttonProps {
    children: any;
    onClick?: () => any
    type?: 'default' | 'danger' | 'success' | 'primary' | 'warning',
    border?: 'default' | 'solid' | 'dashed' | 'text'
}

interface baseButtonProps extends buttonProps{

}

export type { buttonProps, baseButtonProps }