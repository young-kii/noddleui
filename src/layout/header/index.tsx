import STYLE from './index.module.less'
import Select from "@/noddle-components/select";
import { LocaleConfig } from '@/noddle-components/globalConfig/Config';

export default () => {
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
                <div>
                    <LocaleConfig.LocaleOption/>
                </div>
            </div>
        </>
    )
}