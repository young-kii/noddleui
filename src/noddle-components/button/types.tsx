interface buttonProps {
    children: any;
    onClick?: () => any
}

interface baseButtonProps extends buttonProps{

}

export type { buttonProps, baseButtonProps }