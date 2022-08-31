import useT from "./useT";
import React, {ReactNode, useEffect} from "react";
import {context} from "./Config";
export default (props: { children: ReactNode|null }) => {
    const {children} = props

    const {lan,setLan} = React.useContext(context) as {lan:string,setLan: (en: string)=>void}
    const t = useT()
    return (
        <div>
            title:{t('young')}
            {children}:{lan}
            <button onClick={()=>setLan('en')}>click</button>
        </div>
    )
}