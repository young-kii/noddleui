interface tagProps {
    maxCount?: number

}

interface innerTagProps extends tagProps {
    num: number
    tags: string[]
    maxCount: number
    defaultValue: string
    setTags: (value?: any) => any
}

export type {tagProps, innerTagProps}