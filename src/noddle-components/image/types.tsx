import React, {CSSProperties} from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: CSSProperties["objectFit"]
    preview?: boolean | previewOptions
    onClick?: () => void
    src: React.ImgHTMLAttributes<HTMLImageElement>['src']
}

interface previewOptions {
    visible?: boolean
    src?: ImageProps['src']
    onVisibleChange?: (values: boolean) => any
}

interface MaskProps {
    content?: React.ReactNode
}

type PreviewProps = Required<Pick<ImageProps, 'src'>> & Pick<ImageProps, 'preview'> & {
    onVisibleChange?: (visible: boolean) => void
}

export type {ImageProps, MaskProps, PreviewProps}