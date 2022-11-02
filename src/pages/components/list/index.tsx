import STYLE from "./index.module.less"
import List from "@/noddle-components/list";
// @ts-ignore
import {Message} from "noddle-ui";
import 'noddle-ui/style'
import React, {useRef} from "react";
import Button from "@/noddle-components/button";
type onClick = React.MouseEventHandler<HTMLElement>
export default () => {
    const refok = useRef()
    const handleClick:onClick = () => {
        Message.error('点击')
        console.log(refok.current)
    }
    return (
        <div style={{width: '100%', height: 500, padding: 20}}>
            <Button  block onClick={handleClick}>你在干嘛</Button>
            <List/>
        </div>
    )
}
