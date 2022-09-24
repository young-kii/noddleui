import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import STYLE from './index.module.less'

export default (props: baseIconProps) => {
    const {width, height, color} = props
    return (
        <>
            <svg width={width || BASE_WIDTH} height={height || BASE_HEIGHT} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 5h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993L3 5ZM3 11a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11H3ZM3 15h8.498a6.506 6.506 0 0 1 1.312-2H3l-.117.007A1 1 0 0 0 3 15ZM3 17h8.019a6.62 6.62 0 0 0 .155 2H3a1 1 0 0 1-.117-1.993L3 17ZM12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Zm6.35 2.854-.07.057a.5.5 0 0 1-.637-.057l-.058-.07a.5.5 0 0 1 .058-.638L19.289 18H14.5l-.09-.008A.5.5 0 0 1 14 17.5l.008-.09A.5.5 0 0 1 14.5 17h4.789l-1.646-1.646-.058-.07a.5.5 0 0 1 .765-.638l2.516 2.517.05.066.035.061.029.08.014.086-.002.11-.019.085-.023.059-.044.077-.04.05-2.516 2.517Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}