import { CSSProperties } from "react";
import { themeTypes } from "../../types/common";
declare namespace _Icon {
    interface baseIconProps {
        onClick?: (value?: any) => any;
        theme?: themeTypes;
        width?: number;
        height?: number;
        color?: CSSProperties["color"];
        spin?: boolean;
        style?: CSSProperties;
    }
    interface arrowDownProps extends baseIconProps {
        active?: boolean;
    }
    const BASE_HEIGHT = 20;
    const BASE_WIDTH = 20;
}
export default _Icon;
