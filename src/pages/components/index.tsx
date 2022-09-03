import {Outlet} from "react-router-dom"
import STYLE from './index.module.less'
export default () => {
    return (
        <div id={'components'} style={{position:'relative'}} className={STYLE.container}>
            <Outlet/>
        </div>
    )
}