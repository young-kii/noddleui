import React, {useRef, useState} from "react";
import Steps from "@/noddle-components/steps";
import {step} from "@/noddle-components/steps/types";


export default () => {
    const steps = [
        {
            title: 'hello',
            content: {
                extra: {content: '2020-11-02', time: '2020-11-02', position: 'footer'},
                main: '这是我的内容哦'
            }
        },
        {
            title: '关于这个大标题',
            content: {
                extra: {content: '2020-11-02', time: '2020-11-02', position: 'footer'},
                main: '这是我的内容哦'
            }
        },
    ] as step[]
    return (
        <>
            overview
            <Steps steps={steps}/>
        </>
    )
}
