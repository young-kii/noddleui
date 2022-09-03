import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import './index.less'
import Locales from "@/locales";
import {Config} from "@/noddle-components/globalConfig/Config";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Config Locales={Locales}>
                <App/>
            </Config>
        </BrowserRouter>
    </React.StrictMode>
)
