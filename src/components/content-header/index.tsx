import STYLE from './index.module.less'
import {useEffect, useState} from "react";

export default () => {
    const [hideInfo,setHideInfo] = useState(false)
    useEffect(()=>{
        const content = document.getElementById('noddle-content') as HTMLDivElement
        content.onscroll = () => {
            if(content.scrollTop > 130)
                setHideInfo(true)
            else setHideInfo(false)
        }
    },[])
    return (
        <>
            <div className={STYLE.container}>
                <div className={STYLE.info + ' ' + (hideInfo ? STYLE.hide : '') }>
                    <h1 className={STYLE.title}>React for Web</h1>
                    <div className={STYLE.description}>Design 适配桌面端的组件库，适合在 React 技术栈项目中使用。</div>
                </div>
                <div className={STYLE.imageContainer}>
                    <img className={STYLE.image}
                        src={"https://iconfont.alicdn.com/p/illus_3d/file/NdzEShoF8VBW/a0e793fe-25c7-4307-9603-90b3dc4212ce.png"}
                        alt=''/>
                </div>
            </div>
        </>
    )
}
