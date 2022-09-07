import STYLE from './index.module.less'
import NoddleLink from "@/components/noddle-link/index";
import {useTranslation} from "@/noddle-components/globalConfig/Config";
import {Fragment} from "react";
import NavItems from "@/layout/nav/nav-items";
import itemList from "@/layout/nav/nav-items/config";

export default () => {

    return (
        <>
            <div className={STYLE.nav}>
                <h2 className={STYLE.header}>React for Web</h2>
                <NavItems list={itemList}/>
            </div>
        </>
    )
}
