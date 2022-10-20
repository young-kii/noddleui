import STYLE from './index.module.less'
import {confirmModalProps, modalProps} from "@/noddle-components/modal/types";
import ReactDOM from "react-dom";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import {ClassNameConfig, useTranslation} from "@/noddle-components/globalConfig/Config";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import Draggable from 'react-draggable'
import React, {CSSProperties, useEffect, useState} from "react";
import { noddle_main_color} from "@/types/common";
import {createRoot} from "react-dom/client";
import AlertCircle from "@/noddle-components/icons/alert-circle";
import {getPropertyValue} from "@/utils";

const modalId = 'noddle-confirm-modal_sdju2414o9'
let modal: any = null
const Modal = (props: modalProps) => {
    const body = document.body;
    return ReactDOM.createPortal(Modal_(props), body)
}

Modal.confirm = (props: confirmModalProps) => {
    const body = document.body
    const root = createRoot(document.createElement('div'))
    const asyncCancel = () => {
        const container = document.getElementById(modalId) as any
        container.style.opacity = '0';
        setTimeout(() => {
            root.unmount()
        }, 300)
    }
    modal = ReactDOM.createPortal(<ConfirmModal {...props} asyncCancel={asyncCancel}/>, body)
    root.render(modal)
}

const Modal_ = (props: modalProps) => {
    const {open, title, children, onConfirm, onCancel, draggable, zoom} = props
    const translate = useTranslation()
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [cursor, setCursor] = useState(draggable ? 'grab' : 'default')
    const class_container = styles({
        container: true,
        fadeIn: open
    })
    const style_container = {
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? 1 : 0
    } as CSSProperties
    const style_modal = {
        width: '',
        transform: open ? 'scale(1)' : (getZoom(zoom) === 'in' ? 'scale(0.9)' : 'scale(1.1)'),
        transition: draggable ? 'none' : '',
        cursor: cursor,
        opacity: open ? 1 : 0
    } as CSSProperties
    const handleCancel = () => {
        onCancel?.()
    }
    const handleConfirm = () => {
        onConfirm?.()
    }
    const renderModal = () => {
        return draggable ? <>
            <Draggable handle={'#noddle-modal-header'} bounds={'parent'} onDrag={() => setCursor('grabbing')}
                       onStop={() => setCursor('grab')}>
                <div className={STYLE.modal} style={style_modal}>
                    <div id={'noddle-modal-header'} className={STYLE.header}>
                        <div className={STYLE.title}>
                            {title || translate('common.title')}
                        </div>
                        <div className={STYLE.closeIcon} onClick={handleCancel}>
                            <DismissIcon color={'rgba(0,0,0,.3)'} height={20} width={20}/>
                        </div>
                    </div>
                    <div className={STYLE.content}>
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
            </Draggable>
        </> : <>
            <div className={STYLE.modal} style={style_modal}>
                <div id={'noddle-modal-header'} className={STYLE.header}>
                    <div className={STYLE.title}>
                        {title || translate('common.title')}
                    </div>
                    <div className={STYLE.closeIcon} onClick={handleCancel}>
                        <DismissIcon onClick={handleCancel} color={'rgba(0,0,0,.3)'} height={20} width={20}/>
                    </div>
                </div>
                <div className={STYLE.content}>
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
    return (
        <div className={class_container} style={style_container}>
            <div className={STYLE.mask} onClick={handleCancel}/>
            {
                renderModal()
            }
        </div>
    )
}

const ConfirmModal = (props: confirmModalProps) => {
    //todo
    useEffect(()=>{
        console.log('快点改记得改')
    },[])
    const {title, onConfirm, onCancel,immediatelyCancel, asyncCancel, content} = props
    // const translate = useTranslation()
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        conformModalContainer: true,
    })
    const style_container = {} as CSSProperties
    const handleCancel = () => {
        onCancel?.()
        asyncCancel?.()
    }
    const handleConfirm = () => {
        onConfirm?.(asyncCancel)
    }
    const style_modal = {} as CSSProperties
    return (
        <div id={modalId} className={class_container} style={style_container}>
            <div className={STYLE.mask}/>
            <div className={STYLE.conformModal} style={style_modal}>
                <div className={STYLE.header}>
                    <AlertCircle height={28} width={28} color={noddle_main_color}/>
                    <div className={STYLE.title}>
                        {title}
                    </div>
                </div>
                <div className={STYLE.content}>
                    {content}
                </div>
                <div className={STYLE.footer}>
                    <div className={STYLE.left}/>
                    <div className={STYLE.right}>
                        <Button type={'default'} border={'solid'} onClick={handleCancel}>取消</Button>
                        <Button onClick={handleConfirm}>确定</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

const getZoom = (zoom: modalProps["zoom"]) => {
    return getPropertyValue(zoom, ['in', 'out'], 'in')
}

export default Modal
