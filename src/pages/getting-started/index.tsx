import STYLE from './index.module.less'
import ContentHeader from "@/components/content-header";
import {useEffect} from "react";

export default () => {
    return (
        <>
            <ContentHeader/>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
        </>
    )
}