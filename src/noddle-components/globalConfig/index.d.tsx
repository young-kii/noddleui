import _Select from "@/noddle-components/select/index.d";
import selectProps = _Select.selectProps;

type _object = { [key: string]: any }
type _function = { [key: string]: (p: any) => void }
type _context = {
    props: selectProps,
    setProps: (value: any) => void
}


type contextType = {
    locale: string;
    Locales: _object;
    setLocale?: any;
    languages: _object

}

interface Locales {
    defaultLocale: string,
    allLocales: _object,
    languages: _object
}

interface configProps {
    children?: any;
    Locales?: Locales
}

export type {_context, _object, _function, Locales, configProps, contextType}