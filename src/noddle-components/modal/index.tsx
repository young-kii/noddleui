import STYLE from './index.module.less'
import {modalProps} from "@/noddle-components/modal/types";
import ReactDOM from "react-dom";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import {ClassNameConfig, useTranslation} from "@/noddle-components/globalConfig/Config";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import {CSSProperties} from "react";

export default (props: modalProps) => {
    const body = document.body;
    return ReactDOM.createPortal(Modal(props), body)
}

const Modal = (props: modalProps) => {
    const {open, title, content, onConfirm, onCancel} = props
    const translate = useTranslation()
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
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
        transform: open ? 'translateY(-50%) scale(1)' : '',
        opacity: open ? 1 : 0
    } as CSSProperties
    const handleCancel = () => {
        onCancel?.()
    }
    const handleConfirm = () => {
        onConfirm?.()
    }

    return (
        <div className={class_container} style={style_container}>
            <div className={STYLE.mask} onClick={handleCancel}/>
            <div className={STYLE.modal} style={style_modal}>
                <div className={STYLE.header}>
                    <div className={STYLE.title}>
                        {title || translate('common.title')}
                    </div>
                    <div className={STYLE.closeIcon} onClick={handleCancel}>
                        <DismissIcon color={'rgba(0,0,0,.3)'} height={16} width={16}/>
                    </div>
                </div>
                <div className={STYLE.content}>
                    {content || translate('common.content')}
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
        </div>
    )
}