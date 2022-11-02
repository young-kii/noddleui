declare namespace _Input {
    interface inputContext {
        props: inputProps;
        setProps: (value: any) => void;
    }
    interface baseInputProps {
        placeholder?: string;
        autoWidth?: boolean;
        initValue?: string | number;
        initWidth?: number;
        readonly?: boolean;
        value?: string;
    }
    interface inputProps extends baseInputProps {
        onChange: (value: string | undefined | number) => void;
    }
    interface pureInputProps extends inputProps {
    }
}
export default _Input;
