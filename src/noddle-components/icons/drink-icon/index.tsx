import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import BASE_WIDTH = _Icon.BASE_WIDTH;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props

    return (
        <>
            <svg width={width || BASE_WIDTH} height={height || BASE_HEIGHT} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.75 2a.75.75 0 0 0-.75.75v7a5.751 5.751 0 0 0 5 5.701v5.057L8.753 20.5a.75.75 0 0 0-.006 1.5l3 .011h.005l3.5-.011a.75.75 0 0 0-.004-1.5l-2.748.009v-5.053A6.251 6.251 0 0 0 18 9.25v-6.5a.75.75 0 0 0-.75-.75H6.75Zm.75 5V3.5h9V7h-9Zm8.183 2.707a3.727 3.727 0 0 1-1.159 2.066 3.753 3.753 0 0 1-1.754.898.5.5 0 0 1-.205-.979 2.736 2.736 0 0 0 1.286-.658 2.763 2.763 0 0 0 .85-1.515.5.5 0 0 1 .982.188Z"
                    fill={color || "#212121"}/>
            </svg>
        </>
    )
}