import {Config, useTranslation, LocaleConfig} from "@/noddle-components/globalConfig/Config";
import Locales from "@/locales";

export default () => {
    return (
        <div>
            changelog

                <div>
                    <A/>
                    <LocaleConfig.LocaleOption/>
                </div>




        </div>
    )
}

const A = () => {
    const translate = useTranslation()
    return (
        <div>{translate('person.young.name')}</div>
    )
}