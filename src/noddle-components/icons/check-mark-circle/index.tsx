import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg width={width || BASE_WIDTH} height={height || BASE_HEIGHT} style={{...style, maxHeight: height || BASE_HEIGHT}} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}