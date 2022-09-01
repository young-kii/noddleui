import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.less'
import {Config} from "@/components/globalConfig/Config";
import II from "./II";
import {Locales} from "@/locales";
import CodeBox from "@/components/codeBox";

function App() {

    return (
        <div className="App">
            <Config Locales={Locales}>
                <II></II>
                <CodeBox/>
            </Config>

        </div>
    )
}

export default App
