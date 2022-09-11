import STYLE from './index.module.less'
interface copyIconProps {
    width: number,
    height: number,
    color?: string
}

export default (props: copyIconProps) => {
    const {width, height, color} = props
    return (
        <>
            <svg d="1662911338586" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2372" width={width} height={height}>
                <path
    d="M576 384a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V448a64 64 0 0 1 64-64h341.333333z m0 64H234.666667v341.333333h341.333333V448z m-64 192v64H298.666667v-64h213.333333zM789.333333 170.666667a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64h-106.666666v-64h106.666666V234.666667H448v106.666666h-64v-106.666666a64 64 0 0 1 64-64h341.333333zM512 533.333333v64H298.666667v-64h213.333333z"
    p-id="2373" fill={color || '#727272FF'}/>
            </svg>
        </>
    )
}