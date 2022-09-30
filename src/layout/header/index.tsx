import STYLE from './index.module.less'
import {LocaleConfig} from '@/noddle-components/globalConfig/Config';
import Divider from "@/noddle-components/divider";
import Text from "@/noddle-components/text";
import BeachIcon from "@/noddle-components/icons/beach-icon";

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