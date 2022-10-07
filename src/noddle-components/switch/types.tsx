import {themeTypes} from "@/types";
import {ReactNode} from "react";

interface switchProps {
    theme?: themeTypes
    type?: 'default' | 'moreStatus'
    extraContent?: defaultExtraContent | moreStatusExtraContent[]
    biggerButton?: boolean
    onChange?: (result: any) => void
}

interface defaultProps extends Omit<switchProps, 'extraContent' | 'type'>{
    extraContent: defaultExtraContent
}

interface moreStatusProps extends Omit<switchProps, 'extraContent' | 'type' | 'theme' | 'biggerButton'>{
    extraContent: moreStatusExtraContent[]
}

interface defaultExtraContent  {
    on: ReactNode,
    off: ReactNode
}

interface moreStatusExtraContent {
    default?: boolean
    content: ReactNode
    theme?: themeTypes
}


export type {switchProps, defaultProps, moreStatusProps, defaultExtraContent, moreStatusExtraContent}