import React, {useRef, useState} from "react";
import Steps from "@/noddle-components/steps";


export default () => {
    return (
        <>
            <div style={{width: 400, height: 500, padding: 20}}>
                <Steps steps={[
                    {
                        title: '标题',
                        content: {
                            extra: {
                                content: '2018-6-16',
                                position: 'footer'
                            },
                            main: '这是时间线里面线里面的内线里面的内容sfas线里面的内容sfas线里面的内容sfas容sfas的内容'
                        }
                    },
                    {
                        title: '标题',
                        content: {
                            extra: {
                                content: '2018-6-16'
                            },
                            main: '这是时间线里面的内容'
                        }
                    }
                ]}>123</Steps>
            </div>
            overview
        </>
    )
}
