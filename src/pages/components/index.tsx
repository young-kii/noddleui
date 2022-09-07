import {Outlet} from "react-router-dom"
import STYLE from './index.module.less'
export default () => {
    return (
        <div id={'noddle-components'} className={STYLE.container}>
            <Outlet/>
        </div>
    )
}