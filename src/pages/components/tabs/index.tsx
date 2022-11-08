import STYLE from './index.module.less'
import Tabs from "@/noddle-components/tabs";
import Space from "@/noddle-components/space";
import Button from "@/noddle-components/button";
import React, {useRef} from "react";
import {Text} from "@/noddle-components";
import {tabsProps} from "@/noddle-components/tabs/types";
import Switch from "@/noddle-components/switch";

export default () => {
    const newTabIndex = useRef(0)

    const onEdit:tabsProps["onEdit"] = (onAdd,onRemove,onRename) => {
        onAdd?.({
            label: '新的标签',
            key: `newTab${newTabIndex.current++}`,
            children: <><Text>OKOK</Text> <Switch/></>,
            editable: true,
            closable: true
        },(newItems, items) => {
            console.log(newItems, items)
        })
        onRemove( (key, newItems, items) => {
            console.log(key)
            console.log(newItems)
            console.log(items)
        })
        onRename?.(label => console.log(label))
    }

    return (
        <>
            <div style={{minHeight: 400, width: '100%', padding: 24}}>
                tabs
                <Tabs showAdd onEdit={onEdit} type={"card"} outlined items={[
                    {
                        children: 'hild 1child 1child 1child 1child 1child 1child 1child 1child 1child 1',
                        closable: true,
                        key: 1,
                        label: "Tab 1"
                    },
                    {
                        children: <Space direction={"vertical"}>
                            <Button>打开</Button>
                            <Button>打开</Button>
                            <Button>打开</Button>
                            <Button>打开</Button>
                        </Space>, closable: false, key: 2, label: "Tab 2"
                    },
                    {children: 'child 3', closable: false, key: 3, label: "Tab 3"},
                ]}/>
            </div>
            <div style={{minHeight: 400, width: '100%', padding: 24}}>
                <Tabs items={[
                    {children: 'child 1', key: 0, label: 'tab 1'},
                    {children: 'child 1', key: 1, label: '这是一个', disabled: true},
                    {children: 'child 1', key: 2, label: '一个一个一个TAB'},
                    {children: 'child 3', key: 3, label: 'tab 36'},
                    {children: 'child 1', key: 4, label: 'tab 1'},
                    {children: 'child 1', key: 5, label: 'tab 1'},
                ]}/>
            </div>
        </>
    )
}