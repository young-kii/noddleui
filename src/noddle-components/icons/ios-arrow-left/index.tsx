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
                    d="M12 3a9 9 0 0 0-9 9 9.005 9.005 0 0 0 4.873 8.001L6 20a1 1 0 0 0-.117 1.993L6 22h4a1 1 0 0 0 .993-.883L11 21v-4a1 1 0 0 0-1.993-.117L9 17l-.001 1.327A7.006 7.006 0 0 1 5 12a7 7 0 0 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-9-9Zm0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}