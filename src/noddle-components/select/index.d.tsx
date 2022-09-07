import _Input from "@/noddle-components/input/index.d";
import {_object} from "@/noddle-components/globalConfig/index.d";

namespace _Select {

    export interface selectContext {
        props: selectProps
        setProps: (value: any) => void
    }

    export interface selectProps extends _Input.baseInputProps{
        children?: any
        value: string,
        _map?: _object,
        onChange?: (value: {value: any, label: string | boolean}) => void
    }

    export interface optionProps {
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