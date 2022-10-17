import React, { MutableRefObject, useEffect, useRef, useState} from "react";

import Tooltips from "@/noddle-components/tooltips";
import AddIcon from "@/noddle-components/icons/add-icon";
import CheckMark from "@/noddle-components/icons/check-mark";
import Switch from "@/noddle-components/switch";
import BeachIcon from "@/noddle-components/icons/beach-icon";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import Modal from "@/noddle-components/modal";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import Drawer from "@/noddle-components/drawer";
const {confirm} = Modal
export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const a = useRef(null) as any
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const handleConfirm = () => {
        console.log('ok')
    }
    const handleDrawerCancel = () => {
        setIsDrawerOpen(false)
    }
    const handleShowConfirm = () => {
        confirm({
            title: "这是对话框的标题",
            content: '回家吧✈️',
            onCancel:()=>{
                console.log('确定？？？')
            },
            onConfirm:(onCancel)=>{
                console.log('okok')
                onCancel()

            }
        })
    }
    const showDrawer = () => {
        setIsDrawerOpen(true)
    }

    return (
        <>
            {a.current}
            <Space>
                <Button onClick={() => {
                    setIsModalOpen(true)
                }}>Open</Button>
                {/*<Button onClick={handleShowConfirm}>open</Button>*/}
                <Button type={'danger'} onClick={handleShowConfirm}>王新昊</Button>
                <Button type={'warning'} onClick={showDrawer}>打开抽屉</Button>
            </Space>
            <Modal zoom={'out'} onConfirm={handleConfirm} onCancel={handleCancel} open={isModalOpen}
                   title={'测试标题'}
            >
                <Space direction={"vertical"} gap={12}>
                    {
                        Array.from({length: 5}).fill('OOOOOK !!!').map((item, index) => {
                            return <div key={index}>{String(item)}</div>
                        })
                    }
                </Space>
            </Modal>
            <Drawer open={isDrawerOpen} title={'抽屉的标题'} onCancel={handleDrawerCancel}>
                {
                    Array.from({length: 10}).fill('funky music啊啊啊啊啊啊').map((item, index)=>{
                        return <div key={index}>{String(item) + index}</div>
                    })
                }
            </Drawer>
            {/*<div style={{backgroundColor: "red", marginTop: 100}}>*/}
            {/*    <div>overview</div>*/}
            {/*    <div>overview</div>*/}
            {/*    <div>overview</div>*/}
            {/*    <Tooltips tips={'ok'}>*/}
            {/*        <div ref={a}>overview</div>*/}
            {/*    </Tooltips>*/}
            {/*</div>*/}

            {/*<Tooltips tips={'ads'}>*/}
            {/*    <div>*/}
            {/*        <div>1232</div>*/}
            {/*        <div>1232</div>*/}
            {/*        <div>1232</div>*/}
            {/*    </div>*/}
            {/*</Tooltips>*/}
            {/*<Space direction={"vertical"}>*/}
            {/*    <Switch theme={"default"} onChange={result => console.log(result)}/>*/}
            {/*    <Switch biggerButton theme={'success'} extraContent={{on: '长一点的长一点点', off: '短一'}}/>*/}
            {/*    <Switch biggerButton extraContent={[*/}
            {/*        {content: <><AddIcon height={14} width={14} color={"white"}/>关注</>, theme: "danger"},*/}
            {/*        {content: <><CheckMark height={14} width={14} color={"white"}/>确认</>, theme: "success"},*/}
            {/*        {content: <><CheckMark height={14} width={14} color={"white"}/>王新昊</>, theme: "warning"},*/}
            {/*        {content: <><BeachIcon height={14} width={14} color={"white"}/>顾逸轩</>, theme: "primary"},*/}
            {/*    ]} type={"moreStatus"} theme={'danger'} onChange={result => console.log(result)}/>*/}
            {/*    <Switch theme={'warning'}/>*/}
            {/*    <DismissIcon/>*/}
            {/*    <CheckMark/>*/}
            {/*    <AddIcon/>*/}

            {/*    <Tooltips theme={"success"} size={"medium"} tips={'测试按钮啊啊啊啊啊'}>*/}
            {/*        <Button>测试按钮</Button>*/}
            {/*    </Tooltips>*/}
            {/*    <Tooltips theme={"success"} size={"large"} tips={'测试按钮啊啊啊啊啊'}>*/}
            {/*        <Button>测试按钮</Button>*/}
            {/*    </Tooltips>*/}
            {/*</Space>*/}
        </>
    )
}
