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
                    d="M17.5 10c0 1.71-.572 3.287-1.536 4.548l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 17.5 10ZM10 5.5a1 1 0 0 0-1 1V9H6.5a1 1 0 1 0 0 2H9v2.5a1 1 0 1 0 2 0V11h2.5a1 1 0 1 0 0-2H11V6.5a1 1 0 0 0-1-1Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}