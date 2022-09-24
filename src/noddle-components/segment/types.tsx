import {__function, _function} from "@/noddle-components/globalConfig/types";
/**
 * @namespace _Segment
 * @type tab
 * @type segmentProps
 * @type segmentOptionProps
 */
namespace _Segment {


    export type tab = {
        tab: string,
        label: string,
        id?: number
        //自动根据tab[]的index生成id，用于后续的select
    }

    export interface segmentProps {
        className?: string | undefined,
        tabs: tab[],
        selected?: number | string,
        onChange?: __function
    }

    export interface segmentOptionProps extends segmentProps {
        options: HTMLDivElement[]
        optionWidth: []
    }
}

export default _Segment