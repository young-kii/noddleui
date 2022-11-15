import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg style={{...style, minHeight: height || BASE_HEIGHT, minWidth: width || BASE_WIDTH}}
                 width={width || BASE_WIDTH} height={height || BASE_HEIGHT} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.5 10a7.5 7.5 0 1 0-2.952 5.964l4.745 4.743.094.083a1 1 0 0 0 1.32-1.497l-4.743-4.745A7.468 7.468 0 0 0 17.5 10Zm-4-1a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2h7Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}