import {useTranslation} from "@/noddle-components/globalConfig/Config";
import {Fragment} from "react";
import STYLE from "@/layout/nav/index.module.less";
import NoddleLink from "@/components/noddle-link/index";
import {item} from "@/layout/nav/nav-items/index.d";

export default ({list}: { list: item[] }) => {
    const translate = useTranslation()
    return (
        <>
            {
                list.map(item => {
                    return <Fragment key={item.id}>
                        <div className={STYLE.nav_title}>{translate(item.title)}</div>
                        {
                            item.children.map(child => {
                                return <div key={child.id} className={STYLE.nav_item}>
                                    <NoddleLink
                                        to={'/' + ((item.extra ? `${item.extra}/` : '') + (child.to ? child.to : child.title))}>{translate(item.title + '.' + child.title)}</NoddleLink>
                                </div>
                            })
                        }
                    </Fragment>
                })
            }
        </>
    )
}
