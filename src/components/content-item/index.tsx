import STYLE from './index.module.less'
import {ReactNode} from "react";
interface contentItemProps {
    id: string
    children?: ReactNode
    label: string

}
export default (props: contentItemProps) => {
    const {id, children, label} = props
    const newId = 'noddle-contentItem-' + id
    return (
        <div className={STYLE.container} id={newId} data-label={label}>
            { children }
        </div>
    )
}