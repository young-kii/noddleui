import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import STYLE from './index.module.less'

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>

            <svg className={STYLE.svg_container} style={{...style, maxHeight: height || BASE_HEIGHT,}} width={width || BASE_WIDTH} height={height || BASE_HEIGHT} xmlns="http://www.w3.org/2000/svg" id="mdi-alert-circle" viewBox="0 0 24 24">
                <path
                    fill={color || "#282828"} d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
        </>
    )
}