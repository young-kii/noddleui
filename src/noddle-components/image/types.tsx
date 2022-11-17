import React, {CSSProperties} from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: CSSProperties["objectFit"]
    preview?: boolean | previewProps
    onClick?: () => void
    src: React.ImgHTMLAttributes<HTMLImageElement>['src']
}

interface previewProps {
    type: 'single' | 'multiple'
    visible?: boolean
    src?: ImageProps['src'] | ImageProps['src'][]
    onVisibleChange?: (visible: boolean) => any
    current?: number
}

interface MaskProps {
    content?: React.ReactNode
}

export type {ImageProps, MaskProps, previewProps}