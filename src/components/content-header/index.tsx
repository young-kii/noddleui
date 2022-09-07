import STYLE from './index.module.less'
import {useEffect, useState} from "react";

export default () => {
    const [hideInfo, setHideInfo] = useState(false)
    const [docHeaderFixed, setDocHeaderFixed] = useState(false)
    useEffect(() => {

        const content = document.getElementById('noddle-content') as HTMLDivElement

        content.onscroll = (ev) => {
            console.log(ev)
            console.log(content.scrollTop)
            if (content.scrollTop > 130) {
                setHideInfo(true)
                if (content.scrollTop > 162) {
                    console.log('ok')
                    setDocHeaderFixed(true)
                } else setDocHeaderFixed(false)
            } else setHideInfo(false)
        }
    }, [])
    return (
        <>
            <div className={STYLE.container}>
                <div className={STYLE.top}>
                    <div className={STYLE.info + ' ' + (hideInfo ? STYLE.hide : '')}>
                        <h1 className={STYLE.title}>React for Web</h1>
                        <div className={STYLE.description}>Design 适配桌面端的组件库，适合在 React 技术栈项目中使用。</div>
                    </div>
                </div>
            </div>
            <div className={STYLE.imageContainer + ' ' + (hideInfo ? STYLE.hide_display : '')}>
                <img className={STYLE.image}
                     src={"https://iconfont.alicdn.com/p/illus_3d/file/NdzEShoF8VBW/a0e793fe-25c7-4307-9603-90b3dc4212ce.png"}
                     alt=''/>
            </div>
            <div className={STYLE.doc_header}>
                <div className={STYLE.segment}>111</div>
            </div>
        </>
    )
}
