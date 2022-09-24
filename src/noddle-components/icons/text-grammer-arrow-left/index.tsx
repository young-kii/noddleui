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
                    d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-.78 2.589-.07.057-2.516 2.517-.04.05-.044.077-.023.059-.02.085-.002.11.015.086.03.08.033.061.051.066 2.516 2.517a.5.5 0 0 0 .765-.638l-.058-.07L15.711 18H20.5a.5.5 0 0 0 .492-.41L21 17.5a.5.5 0 0 0-.41-.492L20.5 17h-4.789l1.646-1.646a.5.5 0 0 0 .058-.638l-.058-.07a.5.5 0 0 0-.638-.057ZM11.019 17H3l-.117.007A1 1 0 0 0 3 19h8.174a6.52 6.52 0 0 1-.155-2ZM11.498 15H3a1 1 0 0 1-.117-1.993L3 13h9.81c-.553.575-1 1.252-1.312 2ZM3 11a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11H3ZM21 5H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}