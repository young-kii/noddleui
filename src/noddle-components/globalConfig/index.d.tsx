
type _object = { [key: string]: any }
type _function = { [key: string]: (p: any) => void }

type __function = (value: any) => void


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

export type {_object, _function, __function, Locales, configProps, contextType}