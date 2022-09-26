import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;
import STYLE from './index.module.less'

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg width={width || BASE_WIDTH} height={height || BASE_HEIGHT} style={style} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.25 2.001a.75.75 0 0 1 .743.648l.007.102v.752c0 .633-.196 1.22-.53 1.704a3.75 3.75 0 0 1 2.521 3.29h.256a2.25 2.25 0 0 0 2.24-2.259l-.006-1.485a.75.75 0 0 1 1.5-.006l.007 1.485a3.75 3.75 0 0 1-3.536 3.76l-.214.006L17 9.997v1.502h4.253a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743l-.102.007H17v1.999h.238l.214.007a3.75 3.75 0 0 1 3.531 3.56l.005.2-.007 1.485a.75.75 0 0 1-1.493.095l-.007-.102.007-1.485a2.25 2.25 0 0 0-2.087-2.253l-.154-.006h-.476a5.002 5.002 0 0 1-9.542 0H6.74a2.25 2.25 0 0 0-2.24 2.259l.005 1.485a.75.75 0 1 1-1.5.007L3 18.765a3.75 3.75 0 0 1 3.535-3.76L6.75 15l.25-.001v-2H2.75a.75.75 0 0 1-.743-.648L2 12.25a.75.75 0 0 1 .648-.743l.102-.007L7 11.499V9.997h-.25l-.215-.005a3.75 3.75 0 0 1-3.53-3.56L3 6.231l.006-1.485A.75.75 0 0 1 4.5 4.65l.006.102L4.5 6.238a2.25 2.25 0 0 0 2.087 2.254l.154.006h.268A3.753 3.753 0 0 1 9.53 5.206a2.968 2.968 0 0 1-.524-1.494L9 3.503v-.752a.75.75 0 0 1 1.493-.102l.007.102v.752a1.5 1.5 0 0 0 2.993.145l.007-.145v-.752a.75.75 0 0 1 .75-.75Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}