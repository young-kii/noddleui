import STYLE from './index.module.less'
import {NavLink} from "react-router-dom";
import {NoddleLinkProps} from "@/components/noddle-link/index.d";

export default (props:NoddleLinkProps) => {
    const {to,children} = props
    const setTitle = () => {
        typeof children === "string" ? document.title = children + ' | NoddleUI' : document.title
    }
    return (
        <>
            <NavLink onClick={setTitle} className={({isActive}) => (STYLE.nav_link + ' ' + (isActive ? STYLE.nav_link_active : ''))} to={to}>
                {children}
            </NavLink>
        </>
    )
}