import { __function } from "../../noddle-components/globalConfig/types";
/**
 * @namespace _Segment
 * @type tab
 * @type segmentProps
 * @type segmentOptionProps
 */
declare namespace _Segment {
    type tab = {
        tab: string;
        label: string;
        id?: number;
    };
    interface segmentProps {
        className?: string | undefined;
        tabs: tab[];
        selected?: number | string;
        onChange?: __function;
    }
    interface segmentOptionProps extends segmentProps {
        options: HTMLDivElement[];
        optionWidth: [];
    }
}
export default _Segment;
