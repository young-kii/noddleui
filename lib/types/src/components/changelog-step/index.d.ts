import { step } from "../../noddle-components/timeline/types";
import { ReactNode } from "react";
interface props {
    version: string;
    time: string;
    list: {
        type: 'fix' | 'feat' | 'others' | 'change' | string;
        list: {
            title: ReactNode | string;
            items: any[];
        }[];
    }[];
}
declare const _default: (props: props) => step;
export default _default;
