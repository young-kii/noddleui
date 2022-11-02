/// <reference types="react" />
import { messageConfig, messageItemProps } from "../../noddle-components/message/types";
declare namespace message {
    const Message: {
        (): JSX.Element;
        Item(props: messageItemProps): JSX.Element;
    };
    const info: (config: messageConfig | string) => void;
    const success: (config: messageConfig | string) => void;
    const error: (config: messageConfig | string) => void;
    const warning: (config: messageConfig | string) => void;
}
export default message;
