import { Outlet } from 'react-router-dom'
import STYLE from './index.module.less'

export default () => {
    return (
        <>
            <div className={STYLE.content}>
                <Outlet/>
            </div>
        </>
    )
}