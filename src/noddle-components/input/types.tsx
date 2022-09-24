
namespace _Input {

    export interface inputContext {
        props: inputProps
        setProps: (value: any) => void
    }

    export interface baseInputProps {
        placeholder?: string,
        autoWidth?: boolean,
        initValue?: string | number,
        initWidth?: number,
        readonly?:boolean,
        value: string,
    }
    export interface inputProps extends baseInputProps{
        onChange: (value: string | number) => void
    }

    export interface pureInputProps extends inputProps {
    }
}

export default _Input

