import React, {useEffect, useRef, useState} from "react";
import Switch from "@/noddle-components/switch";
import Space from "@/noddle-components/space";
import Button from "@/noddle-components/button";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import CheckMark from "@/noddle-components/icons/check-mark";
import AddIcon from "@/noddle-components/icons/add-icon";

export default () => {
    return (
        <>
            overview
            <Space>
                <Switch theme={"default"} onChange={ result => console.log(result)}/>
                <Switch theme={'success'}/>
                <Switch extraContent={[
                    {content: <><AddIcon height={14} width={14} color={"white"}/>关注</>, theme: "danger"},
                    {content: <><CheckMark height={14} width={14} color={"white"}/>确认</>, theme: "success"},
                ]} type={"moreStatus"} theme={'danger'} onChange={result => console.log(result)}/>
                <Switch theme={'warning'}/>
                <DismissIcon/>
                <CheckMark/>
                <AddIcon/>
            </Space>
        </>
    )
}
