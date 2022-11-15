import {
    Badge,
    Button,
    Config,
    Divider,
    Drawer,
    Message,
    Modal,
    Notification,
    Switch,
    Table,
    Tabs,
    Tag, Text, Timeline
} from "noddle-ui";
import React, {CSSProperties, Fragment, useEffect, useRef, useState} from "react";
import 'noddle-ui/style'
import {Space} from "noddle-ui";

const {confirm} = Modal
export type ColumnsType<T> = {
    position?: 'left' | 'center' | 'right'
    title: string,
    headerStyle?: CSSProperties,
    cellStyle?: CSSProperties,
    dataIndex: keyof T,
    render?: (value: any, records: T) => any
}[]
export default () => {
    const [open, setOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [count, setCount] = useState(8)
    const handleClick = () => {
        setCount(prevState => prevState + 1)
        Message.success('测试成功辣')
    }
    const handleNotification = () => {
        Notification.success({
            content: "我成功了", title: "一则Notification通知"
        })
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleConfirm = () => {
        confirm({
            asyncCancel(value: any): any {
            }, content: '删除将不再处理', immediatelyCancel(value: any): any {
            }, onConfirm(value: any): any {
                value()
            }, title: "确定吗"
        })
    }
    type dataType = {
        key: React.Key,
        name: string,
        age: number
    }

    const data: dataType[] = [
        {
            key: 0,
            name: '顾逸轩',
            age: 19
        },
        {
            key: 1,
            name: '顾逸轩',
            age: 20
        },
        {
            key: 2,
            name: '顾逸轩',
            age: 33
        }
    ]

    const columns: ColumnsType<dataType> = [
        {
            cellStyle: undefined,
            dataIndex: 'name',
            headerStyle: undefined,
            position: "center",
            title: "名字"
        },
        {
            cellStyle: undefined,
            dataIndex: 'age',
            headerStyle: undefined,
            position: "center",
            title: "年龄"
        },
    ]


    return (

        <Fragment>
            <Modal title={'你干嘛~哎哟'} zoom={"out"} open={open} onCancel={handleCloseModal}
                   onConfirm={value => console.log(value)}>
                <div>哈哈哈你在干嘛呢😄</div>
                <div>哈哈哈你在干嘛呢</div>
                <div>哈哈哈你在干嘛呢</div>
            </Modal>
            <Drawer title={'标题'} open={drawerOpen} onCancel={() => setDrawerOpen(false)}>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
                <div>你干嘛~哎哟</div>
            </Drawer>
            <div style={{padding: 20}}>
                <Space direction={"vertical"}>
                    <Space>
                        <Button onClick={handleClick}>测试Message</Button>
                        <Button border={'solid'} type={'warning'} onClick={handleNotification}>测试Notification</Button>
                        <Button type={'danger'} onClick={handleOpenModal}>测试Modal</Button>
                        <Button type={'default'} onClick={handleClick}>测试</Button>
                        <Badge count={count} overflowCount={30}>
                            <Button>测试Badge的</Button>
                        </Badge>
                    </Space>
                    <Space>
                        <Button onClick={handleConfirm}>测试Confirm</Button>
                        <Button border={'solid'} type={'warning'} onClick={() => setDrawerOpen(true)}>测试Drawer</Button>
                        <Button type={'danger'} onClick={handleOpenModal}>测试Modal</Button>
                        <Button type={'default'} onClick={handleClick}>测试</Button>
                        <Badge count={count} overflowCount={30}>
                            <Button>测试Badge的</Button>
                        </Badge>
                    </Space>
                    <Table dataSource={data} columns={columns} bordered/>
                    <Switch type={"moreStatus"} extraContent={[
                        {content: '草草草凸(艹皿艹 )', default: false, theme: "danger"},
                        {content: '草草草凸(艹皿艹 )', default: false, theme: "success"},
                        {content: '草草草凸(艹皿艹 )', default: true, theme: "warning"},
                    ]} onChange={result => console.log(result)}/>
                    <Switch extraContent={{on: '打开啊啊', off: '关闭啊啊啊'}}/>
                    <Tabs items={[
                        {children: '哈哈哈哈', closable: true, key: 'o2', label: "123"},
                        {children: '哈哈哈哈', closable: true, key: 'ook2', label: "123"},
                        {children: '哈哈哈哈', closable: true, key: 'ook', label: "123"},
                    ]}/>
                    <Tag maxCount={19}/>
                    <Text bolder type={'danger'}>我知道</Text>
                    <Timeline timeline={[
                        {
                            title: <Text pure bolder type={'danger'} fontSize={24}>惊天の大事件</Text>,
                            content: {
                                main: '我去，(⇀‸↼‶)，那天居然发生了...',
                                extra: {
                                    time: '2022-11-12',
                                    content: '2022-11-12',
                                }
                            }
                        },
                        {
                            title: <Text pure bolder type={'warning'} fontSize={24}>震撼人心の一天</Text>,
                            content: {
                                main: '事件1',
                                extra: {
                                    time: '2022-11-12',
                                    content: '2022-11-12',
                                }
                            }
                        }
                    ]}/>
                </Space>
            </div>
        </Fragment>
    )
}