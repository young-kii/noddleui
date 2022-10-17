import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg width={width || BASE_WIDTH} height={height || BASE_HEIGHT} style={{...style, maxHeight: height || BASE_HEIGHT}}  fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.53 6.47-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47-.084-.072a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47-.072.084a.75.75 0 0 0-.007.882l.08.094.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}