import React, {useEffect, useRef, useState} from "react";
import Switch from "@/noddle-components/switch";
import Space from "@/noddle-components/space";

export default () => {

    return (
        <>
            overview
            <Space>
                <Switch theme={'success'}/>
                <Switch theme={'primary'}/>
                <Switch theme={'danger'}/>
                <Switch theme={'warning'}/>
            </Space>
        </>
    )
}
