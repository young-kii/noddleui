import React, {useEffect, useRef, useState} from "react";
import Switch from "@/noddle-components/switch";
import Space from "@/noddle-components/space";
import Button from "@/noddle-components/button";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import CheckMark from "@/noddle-components/icons/check-mark";
import AddIcon from "@/noddle-components/icons/add-icon";
import BeachIcon from "@/noddle-components/icons/beach-icon";

export default () => {
    return (
        <>
            overview
            <Space>
                <Switch theme={"default"} onChange={ result => console.log(result)}/>
                <Switch biggerButton theme={'success'} extraContent={{on:'长一点的长一点点',off:'短一'}}/>
                <Switch biggerButton extraContent={[
                    {content: <><AddIcon height={14} width={14} color={"white"}/>关注</>, theme: "danger"},
                    {content: <><CheckMark height={14} width={14} color={"white"}/>确认</>, theme: "success"},
                    {content: <><CheckMark height={14} width={14} color={"white"}/>王新昊</>, theme: "warning"},
                    {content: <><BeachIcon height={14} width={14} color={"white"}/>顾逸轩</>, theme: "primary"},
                ]} type={"moreStatus"} theme={'danger'} onChange={result => console.log(result)}/>
                <Switch theme={'warning'}/>
                <DismissIcon/>
                <CheckMark/>
                <AddIcon/>
            </Space>
        </>
    )
}
