import _Table from "../../noddle-components/table/types";
import { CSSProperties } from "react";
export declare type ColumnsType<T> = {
    position?: 'left' | 'center' | 'right';
    title: string;
    headerStyle?: CSSProperties;
    cellStyle?: CSSProperties;
    dataIndex: keyof T;
    render?: (value: any, records: T) => any;
}[];
declare const _default: (props: _Table.tableProps) => JSX.Element;
export default _default;
