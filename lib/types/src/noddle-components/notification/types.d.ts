import { themeTypes } from "../../types/common";
interface notificationItemProps extends notificationConfig {
    type?: themeTypes;
}
declare type notificationConfig = {
    content: string;
    title: string;
    duration?: number;
};
export type { notificationItemProps, notificationConfig };
