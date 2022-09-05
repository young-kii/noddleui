import _Input from "@/noddle-components/input/index.d";

namespace _Select {

    export interface selectProps extends _Input.inputProps{
        children?: any
        initValue: string
        value: string
    }
    export interface optionProps {
        onClick: () => void,
        selected: boolean,
        children?: any
        value: string | number
    }
    export interface dropDownBoxProps {
        children?: any,
        focus: boolean
    }
    export interface child {
        value?: number | string;
        children?: any
    }
}

export default _Select