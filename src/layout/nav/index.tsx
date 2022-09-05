import STYLE from './index.module.less'
import {Link, NavLink} from "react-router-dom";
import NoddleLink from "@/components/noddle-link/index";
import {useTranslation} from "@/noddle-components/globalConfig/Config";

export default () => {
    const translate = useTranslation()
    return (
        <>
            <div className={STYLE.nav}>
                <h2 className={STYLE.header}>React for Web</h2>
                {/*start*/}
                <div className={STYLE.nav_title}>{translate('nav.start')}</div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/getting-started'}>{translate('nav.getting_started')}</NoddleLink>
                </div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/changelog'}>{translate('nav.changelog')}</NoddleLink>
                </div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/overview'}>{translate('nav.overview')}</NoddleLink>
                </div>
                {/*globalConfig*/}
                <div className={STYLE.nav_title}>{translate('config.config')}</div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/components/globalConfig'}>{translate('config.globalConfig')}</NoddleLink>
                </div>
                {/*input*/}
                <div className={STYLE.nav_title}>{translate('dataEntry.dataEntry')}</div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/components/select'}>{translate('dataEntry.select')}</NoddleLink>
                </div>

            </div>
        </>
    )
}