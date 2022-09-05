import STYLE from './index.module.less'
import Select from "@/noddle-components/select";
import {LocaleConfig, useTranslation} from '@/noddle-components/globalConfig/Config';

export default () => {
    const t = useTranslation()
    return (
        <>
            <div className={STYLE.header}>
                <div className={STYLE.logo}>
                    <span>N</span>
                    <span>o</span>
                    <span>d</span>
                    <span>d</span>
                    <span>l</span>
                    <span>e</span>
                </div>
                {t('person.young.name')}
                <div>
                    <LocaleConfig.LocaleOption/>
                </div>
            </div>
        </>
    )
}