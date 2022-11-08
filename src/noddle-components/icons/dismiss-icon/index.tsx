import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import STYLE from './index.module.less'

export default (props: baseIconProps & {customHover?: boolean}) => {
    const {width, height, color, style, onClick, customHover} = props
    return (
        <>
            <svg onClick={onClick} className={STYLE.svg_container} data-custom={customHover} width={width || BASE_WIDTH} height={height || BASE_HEIGHT} style={{...style}} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}