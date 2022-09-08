import STYLE from './index.module.less'
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
