import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";

export default (props: baseIconProps) => {
    const {width, height, color, style, theme} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_path = styles({
        [`${theme}`]: true
    })
    return (
        <>
            <svg width={width || BASE_WIDTH} height={height || BASE_HEIGHT} style={{...style}} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className={class_path}
                      d="m8.5 16.586-3.793-3.793a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0-1.414-1.414L8.5 16.586Z"
                    fill={ color || "#282828"}/>
            </svg>
        </>
    )
}