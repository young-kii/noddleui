import _Icon from "@/noddle-components/icons/types";
import baseIconProps = _Icon.baseIconProps;
import BASE_WIDTH = _Icon.BASE_WIDTH;
import BASE_HEIGHT = _Icon.BASE_HEIGHT;

export default (props: baseIconProps) => {
    const {width, height, color, style} = props
    return (
        <>
            <svg style={{...style, minHeight: height || BASE_HEIGHT, minWidth: width || BASE_WIDTH}}
                 width={width || BASE_WIDTH} height={height || BASE_HEIGHT} fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2.75c.658 0 1.302.069 1.923.2a1 1 0 1 1-.414 1.957 7.284 7.284 0 0 0-3.018 0 1 1 0 1 1-.414-1.957A9.283 9.283 0 0 1 12 2.75ZM6.25 4.754V4.25a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-.667c.152-.117.308-.227.469-.332A1 1 0 0 0 6.96 4.242c-.245.16-.483.33-.711.512Zm9.406-.22a1 1 0 0 1 1.383-.292 9.293 9.293 0 0 1 2.719 2.719 1 1 0 1 1-1.676 1.09 7.294 7.294 0 0 0-2.134-2.133 1 1 0 0 1-.292-1.383Zm4.208 4.772a1 1 0 0 1 1.186.771 9.283 9.283 0 0 1 0 3.846 1 1 0 1 1-1.957-.414 7.29 7.29 0 0 0 0-3.018 1 1 0 0 1 .771-1.185ZM3.75 10.25a1 1 0 0 1 1 1V12c0 .518.054 1.023.157 1.509a1 1 0 1 1-1.957.414A9.283 9.283 0 0 1 2.75 12v-.75a1 1 0 0 1 1-1Zm.785 5.406a1 1 0 0 1 1.383.292 7.294 7.294 0 0 0 2.134 2.134 1 1 0 0 1-1.091 1.676 9.293 9.293 0 0 1-2.719-2.719 1 1 0 0 1 .293-1.383Zm13.547.292a1 1 0 0 1 1.676 1.091 9.292 9.292 0 0 1-2.719 2.719 1 1 0 1 1-1.09-1.676 7.293 7.293 0 0 0 2.133-2.134Zm-4.573 3.145a1 1 0 1 1 .414 1.957 9.283 9.283 0 0 1-3.846 0 1 1 0 1 1 .414-1.957 7.29 7.29 0 0 0 3.018 0Z"
                    fill={color || "#282828"}/>
            </svg>
        </>
    )
}