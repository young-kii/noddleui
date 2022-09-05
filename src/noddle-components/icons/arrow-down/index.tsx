import {CSSProperties} from "react";

interface arrowDownProps {
    width: number,
    height: number,
    color?: string,
    style?: CSSProperties,
    active?: boolean
}

export default (props: arrowDownProps) => {
    const {width, height, style, color, active} = props
    return (
        <>
            <svg d="1662366869365" className={'noddle-icon'} style={{...style, transition: '.5s ease', transform: active ? 'rotate(180deg)' : ''}}  viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2367" width={width} height={height}>
                <path
                    d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z"
                    p-id="2368" fill={color || '#000000'}></path>
            </svg>
        </>
    )
}