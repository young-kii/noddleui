import {ReactNode} from "react";
import {__function, _object} from "@/noddle-components/globalConfig/index.d";
import _Segment from "@/noddle-components/segment/index.d";

export interface contentHeaderProps {
    img: string,
    title: string,
    description: string,
    tabsConfig?: {
        tabs: _Segment.tab[],
        selected: string,
        onChange: __function
    }
}