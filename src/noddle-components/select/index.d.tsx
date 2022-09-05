import {ReactNode} from "react";
import _Input from "@/noddle-components/input/index.d";

namespace _Select {

    export interface selectProps extends _Input.inputProps{
        children?: ReactNode
    }
    export interface optionProps {
        children?: ReactNode,
        value: string | number
    }
    export interface dropDownBoxProps {

    }
}

export default _Select