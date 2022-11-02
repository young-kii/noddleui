import STYLE from './index.module.less'
import Table, {ColumnsType} from "@/noddle-components/table";
import React from "react";
import Button from "@/noddle-components/button";
import CodeBox from "@/components/codeBox";
import Space from "@/noddle-components/space";
import Text from "@/noddle-components/text";

export default () => {
    interface DataType {
        key: React.Key
        name?: string
        age?: number
        address?: string
        operation?: string
    }

    const columns: ColumnsType<DataType> = [
        {
            title: '名字',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '地址',
            dataIndex: 'address',
            render: value => (
                <Text>{value}</Text>
            )
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (value, records) => (
                <>
                    <Space>
                        <Button type={"primary"} border={"text"} backgroundStyle={"none"} widthFitsText>{value}</Button>
                        <Button type={"danger"} >{value}</Button>
                    </Space>
                </>
            )
        }
    ]
    const data: DataType[] = [
        {
            key: 1,
            name: '顾逸轩',
            age: 19,
            address: '恒通国际创新Width:0ng:0}}{minWidth:0,padding:0}}',
            operation: '删除'
        },
        {
            key: 2,
            name: '顾逸轩2',
            age: 19,
            address: '恒通国际创新园'
        },
        {
            key: 3,
            name: '顾逸轩',
            age: 19,
            address: '恒通国际创新园'
        },
        {
            key: 4,
            name: '顾逸轩2',
            age: 19,
            address: '恒通国际创新园'
        },
        {
            key: 5,
            name: '顾逸轩',
            age: 19,
            address: '恒通国际创新园'
        },
        {
            key: 6,
            address: '恒通国际创新园',
            name: '顾逸轩222222',
            age: 123
        },

    ]

    return (
        <div style={{padding: 16}}>
            <CodeBox code={'nothing'}>
                <Table columns={columns} dataSource={data} rowKey={''} outline />
            </CodeBox>
        </div>
    )
}


