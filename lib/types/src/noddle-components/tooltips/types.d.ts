import { ReactNode } from "react";
import { size, themeTypes } from "../../types/common";
declare namespace _Tooltips {
    interface tooltipsProps {
        children: ReactNode;
        tips: string;
        theme?: themeTypes;
        size?: size;
        handleMouseEnter?: (value?: any) => any;
        handleMouseLeave?: (value?: any) => any;
    }
}
export default _Tooltips;
