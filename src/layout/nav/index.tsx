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
                    <NoddleLink to={'/getting-started'}>快速开始</NoddleLink>
                </div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/changelog'}>更新日志</NoddleLink>
                </div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/overview'}>组件概览</NoddleLink>
                </div>
                {/*globalConfig*/}
                <div className={STYLE.nav_title}>全局配置</div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/components/globalConfig'}>全局特性配置</NoddleLink>
                </div>
                {/*input*/}
                <div className={STYLE.nav_title}>输入</div>
                <div className={STYLE.nav_item}>
                    <NoddleLink to={'/components/select'}>Select 选择器</NoddleLink>
                </div>

            </div>
        </>
    )
}