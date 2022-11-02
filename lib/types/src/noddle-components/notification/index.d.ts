/// <reference types="react" />
import { notificationConfig, notificationItemProps } from "../../noddle-components/notification/types";
declare namespace notification {
    const Notification: {
        (): JSX.Element;
        Item(props: notificationItemProps & {
            rootUnmount: () => void;
        }): JSX.Element;
    };
    const info: (config: notificationConfig) => void;
    const success: (config: notificationConfig) => void;
    const error: (config: notificationConfig) => void;
    const warning: (config: notificationConfig) => void;
}
export default notification;
