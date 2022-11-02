import _Input from "../../noddle-components/input/types";
import { _object } from "../../noddle-components/globalConfig/types";
declare namespace _Select {
    interface selectContext {
        props: selectProps;
        setProps: (value: any) => void;
    }
    interface selectProps extends _Input.baseInputProps {
        children?: any;
        value?: string;
        _map?: _object;
        onChange?: (value: {
            value: any;
            label: string | boolean;
        }) => void;
    }
    interface optionProps {
        children?: any;
        value: string | number;
    }
    interface dropDownBoxProps {
        children?: any;
        focus: boolean;
    }
    interface child {
        value?: number | string;
        children?: any;
    }
}
export default _Select;
