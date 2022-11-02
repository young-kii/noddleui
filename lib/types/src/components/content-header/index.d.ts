/// <reference types="react" />
import _Segment from "../../noddle-components/segment/types";
export interface tabsConfig {
    tabs: _Segment.tab[];
    selected?: string;
    onChange?: (value: {
        tab: string;
        label: string;
    }) => any;
}
interface contentHeaderProps {
    title: string;
    description: string;
    tabsConfig?: tabsConfig;
}
declare const _default: (props: contentHeaderProps) => JSX.Element;
export default _default;
