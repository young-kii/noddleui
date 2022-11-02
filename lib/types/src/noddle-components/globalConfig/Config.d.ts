/// <reference types="vite/client" />
import React from "react";
import { configProps, _object } from "../../noddle-components/globalConfig/types";
export declare const globalContext: React.Context<{}>;
declare const Config: ({ children, Locales }: configProps) => JSX.Element;
export default Config;
/**
 * @see useTranslation
 * @description 翻译功能的hooks
 * @returns {function}
 * @example
 * const translate = useTranslation()
 * const text = translate('person.name')
 */
export declare const useTranslation: () => (value: string) => string;
export declare namespace LocaleConfig {
    function useSetLocale(): (_locale: string) => void;
    function getLocale(): string;
    function LocaleOption(): JSX.Element;
}
export declare namespace ClassNameConfig {
    /**
     * @function classNames
     * @param props
     */
    function classNames(props: any): string;
    function mClassNames(this: CSSModuleClasses, props: _object): string;
}
export declare namespace EmptyConfig {
    const Empty: () => JSX.Element;
}
