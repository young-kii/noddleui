import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg style={{ ...style, minHeight:height || BASE_HEIGHT, minWidth: width || BASE_WIDTH }} width={width || BASE_WIDTH} height={height || BASE_HEIGHT} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" fill={color || "#282828"}/>
            </svg>
        </>
    )
}