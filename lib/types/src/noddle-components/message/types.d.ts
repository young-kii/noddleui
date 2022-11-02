import { themeTypes } from "../../types/common";
interface messageItemProps extends messageConfig {
    content: string;
    type?: themeTypes;
}
declare type messageConfig = {
    content: string;
    duration?: number;
};
export type { messageItemProps, messageConfig };
