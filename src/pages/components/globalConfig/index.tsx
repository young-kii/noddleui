import {LegacyRef, RefObject, useEffect, useRef} from "react";
import {useRoutes} from "react-router-dom";
import STYLE from './index.module.less'
export default () => {

        const yes = useRef() as RefObject<any>

        const go = () => {
                yes.current.offsetParent.offsetParent.offsetParent.scrollTo({
                        top: yes.current.offsetTop,
                        behavior: "smooth"
                })
               // console.log(yes.current.offsetTop)
               // console.log(yes.current.offsetTop)
        }
    return (
        <div id={'gg'} style={{position:'relative'}}>

                <div className={STYLE.card}>123</div>
                <button onClick={go}>go</button>


                <div>globalConfig</div>
                <div>globalConfig</div>
                <div>globalConfig</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>


                <div ref={yes} style={{backgroundColor:'red',position:'relative'}}>globalConfig</div>
                <div>globalConfig</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>
                <div className={STYLE.card}>123</div>





        </div>
    )
}