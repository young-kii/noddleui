import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import STYLE from './index.module.less'
import {noddle_main_color} from "@/types/common";

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg style={{...style, cursor: "pointer"}}  width={width || BASE_WIDTH} height={height || BASE_HEIGHT} xmlns="http://www.w3.org/2000/svg"
                 id="mdi-checkbox-multiple-blank-outline" viewBox="0 0 24 24">
                <path
                    fill={color || noddle_main_color}
                    d="M20,16V4H8V16H20M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z"/>
            </svg>

        </>
    )
}