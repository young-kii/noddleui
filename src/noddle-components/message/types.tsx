import {themeTypes} from "@/types";

interface messageItemProps extends messageConfig{
    content: string
    type?: themeTypes
}

type messageConfig = {
    content: string,
    duration?: number
}

export type {messageItemProps, messageConfig}