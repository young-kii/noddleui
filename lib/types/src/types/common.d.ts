import { ReactNode } from "react";
import { ColumnsType } from "../noddle-components/table";
declare type direction = 'horizontal' | 'vertical';
declare type size = 'nano' | 'small' | 'medium' | 'large' | 'great';
declare type themeTypes = 'danger' | 'default' | 'primary' | 'warning' | 'success';
interface DataType {
    property: string;
    description?: string | ReactNode;
    type: string | ReactNode;
    defaultValue: string | ReactNode;
    required: 'YES' | 'NO';
}
declare type link_target = '_blank' | '_self' | '_three' | '_top' | string;
declare const themes_array: themeTypes[];
declare const themes_message_array: themeTypes[];
declare const noddle_main_color = "#0252D9FF";
declare const noddle_theme_colors: any;
declare const cardTypes: string[];
declare const codeBoxConfigPanelStyle: {
    padding: string;
};
declare const sizes_Base: size[];
declare const sizes_font: {
    [x: number]: size;
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): size | undefined;
    push(...items: size[]): number;
    concat(...items: ConcatArray<size>[]): size[];
    concat(...items: (size | ConcatArray<size>)[]): size[];
    join(separator?: string | undefined): string;
    reverse(): size[];
    shift(): size | undefined;
    slice(start?: number | undefined, end?: number | undefined): size[];
    sort(compareFn?: ((a: size, b: size) => number) | undefined): size[];
    splice(start: number, deleteCount?: number | undefined): size[];
    splice(start: number, deleteCount: number, ...items: size[]): size[];
    unshift(...items: size[]): number;
    indexOf(searchElement: size, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: size, fromIndex?: number | undefined): number;
    every<S extends size>(predicate: (value: size, index: number, array: size[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: size, index: number, array: size[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: size, index: number, array: size[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: size, index: number, array: size[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: size, index: number, array: size[]) => U, thisArg?: any): U[];
    filter<S_1 extends size>(predicate: (value: size, index: number, array: size[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: size, index: number, array: size[]) => unknown, thisArg?: any): size[];
    reduce(callbackfn: (previousValue: size, currentValue: size, currentIndex: number, array: size[]) => size): size;
    reduce(callbackfn: (previousValue: size, currentValue: size, currentIndex: number, array: size[]) => size, initialValue: size): size;
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: size, currentIndex: number, array: size[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: size, currentValue: size, currentIndex: number, array: size[]) => size): size;
    reduceRight(callbackfn: (previousValue: size, currentValue: size, currentIndex: number, array: size[]) => size, initialValue: size): size;
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: size, currentIndex: number, array: size[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends size>(predicate: (this: void, value: size, index: number, obj: size[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: size, index: number, obj: size[]) => unknown, thisArg?: any): size | undefined;
    findIndex(predicate: (value: size, index: number, obj: size[]) => unknown, thisArg?: any): number;
    fill(value: size, start?: number | undefined, end?: number | undefined): size[];
    copyWithin(target: number, start: number, end?: number | undefined): size[];
    entries(): IterableIterator<[number, size]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<size>;
    includes(searchElement: size, fromIndex?: number | undefined): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: size, index: number, array: size[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
    at(index: number): size | undefined;
    [Symbol.iterator](): IterableIterator<size>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
};
declare const sizes_font_map: any;
declare const apiTableColumns: ColumnsType<DataType>;
export type { direction, DataType, themeTypes, link_target, size };
export { apiTableColumns, codeBoxConfigPanelStyle };
export { noddle_main_color, noddle_theme_colors, themes_message_array, themes_array };
export { sizes_Base, sizes_font };
export { sizes_font_map };
export { cardTypes };
