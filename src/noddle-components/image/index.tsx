import React, {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import {ImageProps, MaskProps, PreviewProps} from "@/noddle-components/image/types";
import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {getNewProps} from "@/utils";
import ReactDOM from "react-dom";
import ZoomIn from "@/noddle-components/icons/zoom-in";
import ZoomOut from "@/noddle-components/icons/zoom-out";
import {createRoot} from "react-dom/client";
import ArrowRotateClockwise from "@/noddle-components/icons/arrow-rotate-clockwise";
import ArrowRotateCounterclockwise from "@/noddle-components/icons/arrow-rotate-counterclockwise";
import ArrowCounterclockwiseDashes from "@/noddle-components/icons/arrow-counterclockwise-dashes";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";

const Image = React.forwardRef(((props: ImageProps, ref: React.ForwardedRef<any>) => {

    const {alt, size, style, preview, src, onClick} = props
    const deleteItems = ['preview']
    const newProps = getNewProps(props, deleteItems)
    const style_img = {
        ...style,
        objectFit: size
    } as CSSProperties

    const renderMask = () => {
        return src && preview && <Mask/>
    }

    const handleClick = () => {
        if(src && preview){
            onClick?.()
            if(preview && typeof preview === 'boolean'){
                showPreview()
            }
        }
    }

    const showPreview = () => {
        const body = document.body
        const root = createRoot(document.createElement('div'))
        const handleClose = () => {
            root.unmount()
        }
        const Element = ReactDOM.createPortal(<Preview onVisibleChange={() => handleClose()} src={src || ''}/>, body)
        root.render(Element)
    }

    const renderPreview = () => {
        return (typeof preview === 'object' && preview.visible ) &&
            ReactDOM.createPortal(<Preview onVisibleChange={preview.onVisibleChange || (() => '')} src={preview.src || ''}/>, document.body)
    }

    return (
        <div className={STYLE.container} onClick={handleClick}>
            <img ref={ref} {...newProps} alt={alt} style={style_img}/>
            { renderMask() }
            { renderPreview() }
        </div>
    )

}))

Image.defaultProps = {
    size: 'cover',
    alt: '',
    preview: true
}

const Mask = React.forwardRef((props: MaskProps, ref: React.ForwardedRef<any>) => {
    const {content} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_mask = styles({
        mask: true
    })
    return (
        <div ref={ref} className={class_mask}>
            {content}
        </div>
    )
})

Mask.defaultProps = {
    content: '预览'
}

const Preview = React.forwardRef((props: PreviewProps, ref: React.ForwardedRef<any>) => {
    //todo
    const {preview, src, onVisibleChange} = props
    const PREVIEW_CONTAINER_ID = 'noddle-preview-container'
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [previewShow, setPreviewShow] = useState(false)
    const class_previewContainer = styles({
        previewContainer: true,
        previewContainer_show: previewShow,
    })

    const class_img = styles({
        img: true,
    })

    const class_toolbar = styles({
        toolbar: true,
        toolbar_show: previewShow
    })

    const style_previewContainer = {} as CSSProperties

    const style_img = {
        opacity: previewShow ? 1 : 0,
        transform: `scale(${scale}) rotate(${rotate}deg) translateY(${previewShow ? 0 : '-20px'})`
    } as CSSProperties

    const zoomIn = () => {
        setScale(scale + .4)
    }

    const zoomOut = () => {
        setScale(scale - .4)
    }

    const reset = () => {
        setScale(1)
        if ((rotate % 360) >= 180) {
            setRotate(rotate + 360 - (rotate % 360))
        } else {
            setRotate(rotate - (rotate % 360))
        }
    }

    const rotateClockwise = () => {
        setRotate(rotate + 90)
    }

    const rotateCounterClockwise = () => {
        setRotate(rotate - 90)
    }

    useEffect(() => {

        setPreviewShow(true)

        function mousewheel(e: WheelEvent) {
            setScale(scale => scale + e.deltaY / 500)
        }
        window.addEventListener('wheel', mousewheel, {passive: false})
        return () => {
            window.removeEventListener('wheel', mousewheel)
        }

    }, [])

    useEffect(() => {
        if (scale < 0.5) {
            setScale(0.5)
        } else if (scale > 8) {
            setScale(8)
        }
    }, [scale, rotate])

    const renderToolsBar = () => {
        return (
            <div className={class_toolbar} ref={containerRef}>
                <div className={STYLE.toolItem} onClick={zoomIn}>
                    <ZoomIn color={'rgba(0,0,0,.8)'} width={16} height={16}/>
                </div>
                <div className={STYLE.toolItem} onClick={zoomOut}>
                    <ZoomOut color={'rgba(0,0,0,.8)'} width={16} height={16}/>
                </div>
                <div className={STYLE.toolItem} onClick={rotateClockwise}>
                    <ArrowRotateClockwise color={'rgba(0,0,0,.8)'} width={16} height={16}/>
                </div>
                <div className={STYLE.toolItem} onClick={rotateCounterClockwise}>
                    <ArrowRotateCounterclockwise color={'rgba(0,0,0,.8)'} width={16} height={16}/>
                </div>
                <div className={STYLE.toolItem} onClick={reset}>
                    <ArrowCounterclockwiseDashes color={'rgba(0,0,0,.8)'} width={16} height={16}/>
                </div>
            </div>
        )
    }

    const renderCloseButton = () => {
        return (
            <div className={STYLE.closeButton} onClick={handleClickCloseButton}>
                <DismissIcon height={14} width={14}/>
            </div>
        )
    }

    const handleContainerClick = (event: any) => {
        if (event.target.id === PREVIEW_CONTAINER_ID) {
            setPreviewShow(false)
            setTimeout(() => {
                onVisibleChange?.(false)
            }, 500)
        }
    }

    const handleClickCloseButton = () => {
        setPreviewShow(false)
        setTimeout(() => {
            onVisibleChange?.(false)
        }, 500)
    }

    const Element = () => {
        return (
            preview ?
                <div id={PREVIEW_CONTAINER_ID} ref={ref} className={class_previewContainer}
                     style={style_previewContainer} onClick={handleContainerClick}>
                    <img className={class_img} src={src} alt={''} width={'60%'} style={style_img}/>
                    {renderToolsBar()}
                    {renderCloseButton()}
                </div> : null
        )
    }

    return Element()
})

Preview.defaultProps = {
    preview: {
        visible: false,
        src: ''
    }
}

export default Image