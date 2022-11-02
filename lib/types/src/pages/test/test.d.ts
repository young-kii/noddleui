import { CSSProperties } from "react";
import 'noddle-ui/style';
export declare type ColumnsType<T> = {
    position?: 'left' | 'center' | 'right';
    title: string;
    headerStyle?: CSSProperties;
    cellStyle?: CSSProperties;
    dataIndex: keyof T;
    render?: (value: any, records: T) => any;
}[];
declare const _default: () => JSX.Element;
export default _default;
