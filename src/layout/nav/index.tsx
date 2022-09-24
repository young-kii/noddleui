import STYLE from './index.module.less'
import NavItems from "@/layout/nav/nav-items";
import itemList from "@/layout/nav/nav-items/config";
import TextGrammerArrowRight from "@/noddle-components/icons/text-grammer-arrow-right";
import TextGrammerArrowLeft from "@/noddle-components/icons/text-grammer-arrow-left";
import {useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";

export default () => {
    const [open, setOpen] = useState(false)
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const container = styles({
        container: true,
        open
    })
    const cover = styles({
        cover: true,
        cover_open: open
    })
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className={container}>
                <div className={STYLE.nav}>
                    <h2 className={STYLE.header}>React for Web</h2>
                    <NavItems list={itemList}/>
                </div>
                <div className={STYLE.open_button} onClick={handleClick}>
                    {
                        open ?
                            <TextGrammerArrowLeft width={28} height={28}/>
                            :
                            <TextGrammerArrowRight width={28} height={28}/>
                    }
                </div>
                <div className={cover} onClick={handleClick}/>
            </div>
        </>
    )
}
