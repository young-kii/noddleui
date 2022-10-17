import STYLE from './index.module.less'
import {drawerProps} from "@/noddle-components/drawer/types";
import ReactDOM from "react-dom";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import {ClassNameConfig, useTranslation} from "@/noddle-components/globalConfig/Config";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import React, {CSSProperties, MutableRefObject, useEffect, useRef} from "react";


const Drawer = (props: drawerProps) => {
    const body = document.body;
    return ReactDOM.createPortal(Drawer_(props), body)
}

const Drawer_ = (props: drawerProps) => {
    const {open, title, children, onConfirm, onCancel} = props
    const translate = useTranslation()
    const contentRef = useRef() as MutableRefObject<HTMLDivElement>
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container: true,
        fadeIn: open
    })
    const style_container = {
        visibility: open ? 'visible' : 'hidden',
    } as CSSProperties
    const style_mask = {
        opacity: open ? 1 : 0,
    } as CSSProperties
    const style_drawer = {
        width: '',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
    } as CSSProperties
    const handleCancel = () => {
        onCancel?.()
    }
    const handleConfirm = () => {
        onConfirm?.()
    }
    const renderDrawer = () => {
        return <>
            <div className={STYLE.drawer} style={style_drawer}>
                <div id={'noddle-drawer-header'} className={STYLE.header}>
                    <div className={STYLE.title}>
                        {title || translate('common.title')}
                    </div>
                    <div className={STYLE.closeIcon} onClick={handleCancel}>
                        <DismissIcon onClick={handleCancel} color={'rgba(0,0,0,.3)'} height={20} width={20}/>
                    </div>
                </div>
                <div className={STYLE.content} ref={contentRef}>
                    {children || translate('common.content')}
                </div>
                <div className={STYLE.footer}>
                    <div className={STYLE.left}>

                    </div>
                    <div className={STYLE.right}>
                        <Space gap={8}>
                            <Button border={'text'} onClick={handleCancel}>取消</Button>
                            <Button type={'primary'} onClick={handleConfirm}>确定</Button>
                        </Space>
                    </div>
                </div>
            </div>
        </>
    }
    const handleScroll = (e:any) => {
        console.log(e.target.scrollTop + e.target.offsetHeight,e.target.scrollHeight)
    }

    useEffect(()=>{
        contentRef.current.addEventListener('scroll',handleScroll)
    },[])
    return (
        <div className={class_container} style={style_container}>
            <div className={STYLE.mask} style={style_mask} onClick={handleCancel}/>
            {
                renderDrawer()
            }
        </div>
    )
}


export default Drawer
