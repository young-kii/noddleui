import STYLE from './index.module.less'
import Space from "@/noddle-components/space";
import Button from "@/noddle-components/button";
import Badge from "@/noddle-components/badge";
import Tooltips from "@/noddle-components/tooltips";
import {useEffect, useState} from "react";

export default () => {
    const [show, setShow] = useState(1)

    const increase = () => {
        setShow(show => show + 1 )
    }

    const increaseRandom = () => {
        setShow(show => show + Math.floor(Math.random() * 20) )
    }

    const decline = () => {
        setShow(show => show - 1)
    }

    return (
        <>
            badge：{show}
            <div>解锁新徽章</div>
            <div>解锁新徽章</div>
            <div>解锁新徽章</div>
            <div>解锁新徽章</div>
            <Space>
                <Tooltips tips={'当前值是' + String(show)} size={"small"}>
                    <Badge count={show} overflowCount={60}>
                        <div>解锁新徽章</div>
                    </Badge>
                </Tooltips>
                <Badge count={show} overflowCount={88}>
                    <div>解锁新徽章</div>
                </Badge>
                <Badge count={show} overflowCount={66}>
                    <div>解锁新徽章</div>
                </Badge>
                <Badge count={88}>
                    <Button onClick={increase}>加一</Button>
                </Badge>
                <Badge count={88}>
                    <Button onClick={decline}>减一</Button>
                </Badge>
                <Badge count={88}>
                    <Button onClick={increaseRandom}>加随机</Button>
                </Badge>
            </Space>
        </>
    )
}