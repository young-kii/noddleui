import React, {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import {ImageProps, MaskProps, previewProps} from "@/noddle-components/image/types";
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
import {noddle_main_color} from "@/types/common";
import TextGrammarArrowLeft from "@/noddle-components/icons/text-grammar-arrow-left";
import IosArrowLeft from "@/noddle-components/icons/ios-arrow-left";
import IosArrowRight from "@/noddle-components/icons/ios-arrow-right";

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
        console.log('you')
        if (src && preview) {
            onClick?.()
            if (preview && typeof preview === 'boolean') {
                showPreview()
            }
        }
    }

    const showPreview = () => {
        console.log('lai')
        const body = document.body
        const root = createRoot(document.createElement('div'))
        const handleClose = () => {
            root.unmount()
        }
        const Element = ReactDOM.createPortal(<Preview type={'single'} visible={true} onVisibleChange={() => handleClose()} src={src || ''}/>, body)
        root.render(Element)
    }

    const renderPreview = () => {
        return (typeof preview === 'object' && preview.visible) &&
            ReactDOM.createPortal(<Preview type={'multiple'}
                                           visible={preview.visible}
                                           onVisibleChange={preview.onVisibleChange || (() => '')}
                                           src={preview.src || ''}/>, document.body)
    }

    return (
        <div className={STYLE.container} onClick={handleClick}>
            <img ref={ref} {...newProps} alt={alt} style={style_img}/>
            {renderMask()}
            {renderPreview()}
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

const Preview = React.forwardRef((props: previewProps, ref: React.ForwardedRef<any>) => {
    //todo
    const {visible, src, onVisibleChange, current, type} = props
    const [currentSrc, setCurrentSrc] = useState(current)
    const PREVIEW_CONTAINER_ID = 'noddle-preview-container'
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const img_ref = useRef() as MutableRefObject<HTMLImageElement>
    let img_init_ref: HTMLImageElement = img_ref.current
    const [previewShow, setPreviewShow] = useState(false)
    const [imageListShow, setImageListShow] = useState(false)
    const imagesRef = useRef() as MutableRefObject<HTMLDivElement>
    let images = imagesRef.current
    const [emptySpaceWidth, setEmptySpaceWidth] = useState(0)
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

    const class_image_list = styles({
        imageList: true,
        imageList_show: previewShow
    })

    const get_list_item = (index: number): CSSProperties => ({
        opacity: (previewShow && imageListShow) ? 1 : 0,
        transform: index === currentSrc ? `translateX(${imageListShow ? 0 : -8}px)` : `translateX(${imageListShow ? 0 : -8}px)`,
        boxShadow: index === currentSrc ? `0 0 0 1px ${noddle_main_color}` : '',
    })

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

    const getCurrentImageSrc = () => {
        if (typeof src === 'string') {
            return src
        } else if (src instanceof Array) {
            return src[currentSrc || 0]
        } else {
            return ''
        }
    }

    const renderImageCount = () => {
        if (typeof src === 'string') {
            return null
        }
        else if (src instanceof Array) {
            return `${(currentSrc || 0) + 1} / ${src.length}`
        } else {
            return null
        }
    }

    const renderImageList = () => {

        useEffect(() => {
            const handleSetEmptySpaceWidth = () => setEmptySpaceWidth((imagesRef?.current?.offsetWidth || 0) / 2 - 54)
            handleSetEmptySpaceWidth()
            window.addEventListener('resize',handleSetEmptySpaceWidth)
            images = imagesRef.current
            const handleMouseWheel = (e: any) => {
                const delta = -(e.wheelDeltaX + e.wheelDeltaY) * .4
                images.scrollTo({
                    left: images.scrollLeft + delta,
                })
                e.preventDefault()
            }
            images.addEventListener('wheel', handleMouseWheel, {passive: false})
            setPreviewShow(true)
            setTimeout(()=>{
                setImageListShow(true)
            },200)

            function mousewheel(e: WheelEvent) {
                setScale(scale => scale + e.deltaY / 500)
            }
            img_init_ref = img_ref.current
            img_init_ref.addEventListener('wheel', mousewheel, {passive: false})
            return () => {
                images?.removeEventListener('wheel', handleMouseWheel)
                img_init_ref.removeEventListener('wheel', mousewheel)
                window.removeEventListener('resize',handleSetEmptySpaceWidth)
            }

        }, [])

        const handleImageClicked = (index: number,e: any) => {
            setCurrentSrc(index)
            console.log(e.target.offsetLeft)
            imagesRef.current.scrollTo({
                left: (e.target.offsetLeft - 24 - emptySpaceWidth),
                behavior: 'smooth'
            })
            reset()
        }

        const renderEmptySpace = () => {
            return <div className={STYLE.emptySpace} style={{ width: emptySpaceWidth }}/>
        }

        return src instanceof Array &&
            <div className={class_image_list}>
                <div className={STYLE.images} ref={imagesRef}>
                    { renderEmptySpace() }
                    {
                        src.map((item, index) => {
                            return <img key={index} src={item} alt={''}
                                        className={STYLE.listItem}
                                        style={get_list_item(index)}
                                        onClick={(e) => handleImageClicked(index,e)}/>
                        })
                    }
                    { renderEmptySpace() }
                </div>
                <div className={STYLE.imageCount}>
                    { renderImageCount() }
                </div>
            </div>
    }

    const handleWitchSrc = (option: 'pre' | 'next') => {

        switch (option) {
            case "pre": {
                if(currentSrc !== undefined && currentSrc > 0) {
                    setCurrentSrc(currentSrc - 1)
                    imagesRef.current.scrollTo({
                        left: ((currentSrc || 0) - 1) * 72,
                        behavior: 'smooth'
                    })
                }
                break
            }
            case "next": {
                if(currentSrc !== undefined && src?.length !== undefined && src.length >= 0 && currentSrc < (src?.length - 1)) {
                    setCurrentSrc(currentSrc + 1)
                    imagesRef.current.scrollTo({
                        left: ((currentSrc || 0) + 1) * 72,
                        behavior: 'smooth'
                    })
                }
                break
            }
        }
        reset()
    }

    const renderSwitchButtons = () => {
        return (
            <>
                <div className={STYLE.preButton} onClick={() => handleWitchSrc('pre')}>
                    <IosArrowLeft color={"white"}/>
                </div>
                <div className={STYLE.nextButton} onClick={() => handleWitchSrc('next')}>
                    <IosArrowRight color={"white"}/>
                </div>
            </>
        )
    }

    useEffect(() => {

        setPreviewShow(true)
        function mousewheel(e: WheelEvent) {
            setScale(scale => scale + e.deltaY / 500)
        }
        img_init_ref = img_ref.current
        img_init_ref?.addEventListener('wheel', mousewheel, {passive: false})
        return () => {
            img_init_ref?.removeEventListener('wheel', mousewheel)
        }

    }, [])

    useEffect(() => {
        if (scale < 0.5) {
            setScale(0.5)
        } else if (scale > 2) {
            setScale(2)
        }
    }, [scale, rotate])

    const Element = () => {
        return (
            visible ?
                <div id={PREVIEW_CONTAINER_ID} ref={ref} className={class_previewContainer}
                     onClick={handleContainerClick}>
                    <img ref={img_ref} className={class_img} src={getCurrentImageSrc()} alt={''} width={'60%'} style={style_img}/>
                    {renderToolsBar()}
                    {renderCloseButton()}
                    {type === "multiple" && renderImageList()}
                    {type === "multiple" && renderSwitchButtons()}
                </div> : null
        )
    }

    return Element()
})

Preview.defaultProps = {
    visible: false,
    onVisibleChange: () => null,
    src: '',
    current: 0,
    type: 'single'
}

export default Image