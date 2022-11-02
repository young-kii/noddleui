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
                    d="M12.01 2.25c.735.008 1.466.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.928 1.116l1.4-.615a.75.75 0 0 1 .85.174 9.793 9.793 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.38 1.38 0 0 0 .001 2.226l1.243.915a.75.75 0 0 1 .271.826 9.798 9.798 0 0 1-2.203 3.792.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.927 1.114l-.169 1.526a.75.75 0 0 1-.571.647 9.518 9.518 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.17-1.524a1.382 1.382 0 0 0-1.924-1.11l-1.407.616a.75.75 0 0 1-.849-.175 9.798 9.798 0 0 1-2.203-3.796.75.75 0 0 1 .271-.826l1.244-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826 9.793 9.793 0 0 1 2.205-3.792.75.75 0 0 1 .849-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65c.718-.159 1.45-.243 2.202-.252ZM13.576 8h-3.272l3.105 4-2.773 3.514a.3.3 0 0 0 .236.486h2.704a.3.3 0 0 0 .237-.116l2.778-3.577a.5.5 0 0 0 0-.614l-2.778-3.577A.3.3 0 0 0 13.575 8Zm-3.898.803-2.264 2.889a.5.5 0 0 0-.052.535l.052.081 2.002 2.556.05.05a.3.3 0 0 0 .372 0l.049-.049 1.336-1.68a.3.3 0 0 0 .043-.301l-.042-.07-.638-.814.78-.996-1.688-2.201Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}