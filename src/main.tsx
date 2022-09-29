import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import Locales from "@/locales";
import {Config} from "@/noddle-components/globalConfig/Config";
// const root = document.getElementById('root')
// const init = root.offsetWidth
//
//
// root.style.transformOrigin = 'left top'
// window.onresize = function (e) {
//     root.style.width = init + 'px'
//     let rate = e.target.innerWidth/init
//     root.style.transform = `scale(${rate})`
//     console.log(init,e.target.innerWidth,root.offsetWidth)
// }
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
        <BrowserRouter>
            <Config Locales={Locales}>
                <App/>
            </Config>
        </BrowserRouter>
    // </React.StrictMode>
)
