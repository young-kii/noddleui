import STYLE from './index.module.less'
import ContentHeader from "@/components/content-header";
import CodeBox from "@/noddle-components/codeBox";

export default () => {

    return (
        <>
            <ContentHeader
                title={'React for Web'}
                description={'Design 适配桌面端的组件库，适合在 React 技术栈项目中使用。'}/>

            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
        </>
    )
}