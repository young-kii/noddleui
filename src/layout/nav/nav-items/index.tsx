import {useTranslation} from "@/noddle-components/globalConfig/Config";
import {Fragment} from "react";
import STYLE from "@/layout/nav/index.module.less";
import NoddleLink from "@/components/noddle-link/index";
import {item, child} from "@/layout/nav/nav-items/types";

export default ({list}: { list: item[] }) => {
    const translate = useTranslation()
    const sort = (data: child[]) => {
        return data.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })
    }

    return (
        list.map(item => {
            return <Fragment key={item.title}>
                <div className={STYLE.nav_title}>{translate(item.title)}</div>
                {
                    sort(item.children).map(child => {
                        return <div key={child.title} className={STYLE.nav_item}>
                            <NoddleLink
                                to={'/' + ((item.extra ? `${item.extra}/` : '') + (child.to ? child.to : child.title))}>{translate(item.title + '.' + child.title)}</NoddleLink>
                        </div>
                    })
                }
            </Fragment>
        })
    )
}
