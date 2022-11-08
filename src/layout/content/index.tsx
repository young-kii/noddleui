import { Outlet } from 'react-router-dom'
import STYLE from './index.module.less'
import DrinkIcon from "@/noddle-components/icons/drink-icon";
import React from "react";
import QRCode from '@/assets/noddle-ui.png'
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
                    <div className={STYLE.content}>
                        <img className={STYLE.QRCode} src={QRCode} alt={''} width={120}/>
                    </div>
                </div>
            </div>
        </>
    )
}