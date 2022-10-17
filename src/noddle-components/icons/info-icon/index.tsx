import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg style={{...style, minHeight: height || BASE_HEIGHT,maxHeight: height || BASE_HEIGHT, minWidth: width || BASE_WIDTH}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm-.004 8.25a1 1 0 0 0-.992.885l-.007.116.003 5.502.007.117a1 1 0 0 0 1.987-.002L13 16.75l-.003-5.501-.007-.117a1 1 0 0 0-.994-.882ZM12 6.5a1.251 1.251 0 1 0 0 2.503A1.251 1.251 0 0 0 12 6.5Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}