import STYLE from './index.module.less'
import ContentHeader from "@/components/content-header";
import _Segment from "@/noddle-components/segment/index.d";
import {__function} from "@/noddle-components/globalConfig/index.d";


export default () => {

    return (
        <>
            <ContentHeader
                title={'React for Web'}
                description={'Design 适配桌面端的组件库，适合在 React 技术栈项目中使用。'}
                img={"https://iconfont.alicdn.com/p/illus_3d/file/NdzEShoF8VBW/584439a2-5f12-42e9-ab51-ec083badc77f.png"}/>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
        </>
    )
}