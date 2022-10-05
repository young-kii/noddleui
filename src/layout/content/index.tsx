import { Outlet } from 'react-router-dom'
import STYLE from './index.module.less'
import DrinkIcon from "@/noddle-components/icons/drink-icon";
import React from "react";

export default () => {
    return (
        <>
            <div id={'noddle-content'} className={STYLE.content}>
                <div className={STYLE.blank}>
                    <Outlet/>
                </div>
                <div className={STYLE.bottom}>
                    <div className={STYLE.header}>
                        <DrinkIcon style={{marginRight: 24}}/>
                        <strong>noddle ui</strong>
                    </div>
                </div>
            </div>
        </>
    )
}