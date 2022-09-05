namespace _Input {

    export interface inputProps {
        placeholder?: string,
        autoWidth?: boolean,
        initValue?: string | number,
        initInputWidth?: number,
        readonly?:boolean,
        value: string
    }

    export interface pureInputProps extends inputProps {
    }
}

export default _Input

