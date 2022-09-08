import {__function, _function} from "@/noddle-components/globalConfig/index.d";

namespace _Segment {
    export type tab = {
        tab: string,
        label: string,
        id?: number
    }

    export interface segmentProps {
        className?: string | undefined,
        tabs: any,
        selected: number | string,
        onChange?: __function
    }

    export interface segmentOptionProps extends segmentProps {
        optionWidth: []
    }
}

export default _Segment