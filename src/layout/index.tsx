import Header from '@/layout/header'
import Nav from "@/layout/nav";
import STYLE from './index.module.less'
import Content from "@/layout/content";
export default () => {

    return (
        <>
            <div className={STYLE.layout}>
                <Header/>
                <Nav/>
                <Content/>
            </div>
        </>
    )
}