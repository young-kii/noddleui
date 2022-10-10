import ContentContent from "@/components/content-content";
import ContentItem from "@/components/content-item";
import CodeBox from "@/noddle-components/codeBox";
import React, {useState} from "react";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import Text from "@/noddle-components/text";
import {DataType} from "@/types";
import TableApi from "@/components/table-api";
import {step} from "@/noddle-components/steps/types";
import ChangelogStep from "@/components/changelog-step";
import ChangelogComponent from "@/components/changelog-component";
import PageBase from "@/components/page-base";
import BeachIcon from "@/noddle-components/icons/beach-icon";
import Divider from "@/noddle-components/divider";
import Select from "@/noddle-components/select";
import Switch from "@/noddle-components/switch";

export default () => {
    return <>
        <PageBase title={'Text 文本'} description={'用于修饰文本，改变文本的显示效果，以及添加额外事件'} Demo={Demo} Api={Api}
                  Changelog={Changelog}/>
    </>
}

export interface tabItemsProps {
    onScroll?: (scrollTop: number) => any
}

const Demo = (props: tabItemsProps) => {
    const {onScroll} = props
    return (
        <>
            <ContentContent onScroll={onScroll}>
                <ContentItem id={'basic-usage'} label={'基本用法'} paddingTop={64}>
                    <>
                        <h3>基本用法</h3>
                        <p>步骤条内容主要包括以下三部分：<Text bolder>标题</Text><Text bolder>主要内容</Text><Text
                            bolder>额外内容额外内容额外内容额外内容额外内容额外内容额外内容</Text></p>
                        <CodeBox1/>
                    </>
                </ContentItem>
            </ContentContent>
        </>
    )
}

const CodeBox1 = () => {
    const [decoration, setDecoration] = useState('none') as any
    const [type, setType] = useState('default') as any
    const [bolder, setBolder] = useState(false) as any
    const [pure, setPure] = useState(false) as any
    const [lineType, setLineType] = useState('solid') as any
    const ConfigPanel = () => {
        return (
            <>
                <Divider position={"start"} spacing={'36px'}>配置</Divider>
                <Space style={{padding: '24px 40px 0 40px'}} direction={'vertical'}>
                    <Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>主题：</Text>
                            <Switch type={"moreStatus"} extraContent={[
                                {content: 'primary', theme: 'primary'},
                                {content: 'default', default: true, theme: 'default'},
                                {content: 'danger', theme: 'danger'},
                                {content: 'warning', theme: 'warning'},
                                {content: 'success', theme: 'success'}
                            ]} onChange={result => setType(result.content)}/>
                        </Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>粗体：</Text>
                            <Switch onChange={result => setBolder(result)}/>
                        </Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>仅文字：</Text>
                            <Switch onChange={result => setPure(result)}/>
                        </Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>修饰：</Text>
                            <Select autoWidth value={decoration} onChange={value => setDecoration(value.value)}>
                                <Select.Option value={'underline'}>underline</Select.Option>
                                <Select.Option value={'through'}>through</Select.Option>
                                <Select.Option value={'overline'}>overline</Select.Option>
                                <Select.Option value={'none'}>none</Select.Option>
                            </Select>
                        </Space>
                        {
                            decoration !== 'none' ?
                                <Space gap={0}>
                                    <Text pure color={'black'} fontSize={14}>类型：</Text>
                                    <Select autoWidth value={lineType} onChange={value => setLineType(value.value)}>
                                        <Select.Option value={'solid'}>solid</Select.Option>
                                        <Select.Option value={'dashed'}>dashed</Select.Option>
                                        <Select.Option value={'dotted'}>dotted</Select.Option>
                                    </Select>
                                </Space>
                                : ''
                        }
                    </Space>
                </Space>
            </>
        )
    }
    const code = `<Text type={${type}} pure={${pure}} lineType={${lineType}} decoration=${decoration} bolder=${bolder}>
                        测试文本
                    </Text>`
    return (
        <>
            <CodeBox position={"center"} code={code} config={ConfigPanel()}>
                <Space>
                    <Text type={type}
                          pure={pure}
                          lineType={lineType}
                          decoration={decoration}
                          bolder={bolder}
                    >
                        测试文本
                    </Text>
                </Space>
            </CodeBox>
        </>
    )
}

const Api = (props: tabItemsProps) => {
    const {onScroll} = props

    const data: DataType[] = [
        {
            property: 'children',
            type: "string",
            description: '按钮显示的文本',
            required: 'YES',
            defaultValue: '-'
        },
        {
            property: 'onClick',
            description: '点击按钮时的回调',
            type: '( Event ) => void',
            required: 'NO',
            defaultValue: '-'
        },
        {
            property: 'type',
            description: <>按钮类型，改变的是按钮的<Text bolder pure type={"danger"}>颜色</Text></>,
            type: 'default | danger | success | primary | warning',
            required: 'NO',
            defaultValue: <Text bolder type={"default"}>default</Text>
        },
        {
            property: 'border',
            description: '按钮边框的样式',
            type: 'default | solid | dashed | text',
            required: 'NO',
            defaultValue: <Text bolder type={"default"}>default</Text>
        },
        {
            property: 'disabled',
            description: '是否处于禁用状态',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'backgroundStyle',
            description: '是否填充/背景色是否透明',
            type: 'default | none | border',
            required: 'NO',
            defaultValue: <Text bolder type={"default"}>default</Text>
        },
        {
            property: 'block',
            description: '使按钮宽度适合其父元素宽度',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'widthFitsText',
            description: '使按钮宽度适合文本宽度',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"default"}>default</Text>
        },
        {
            property: 'clickEffect',
            description:
                <>点击按钮之后的特效。特别地，
                    <strong>border</strong>为
                    <Text pure type={"danger"} bolder>text</Text>
                    的按钮<strong>clickEffect</strong>
                    只能为<Text pure type={"danger"} bolder>none</Text>
                    或<Text pure type={"danger"} bolder>default</Text>
                </>,
            type: `currentColor | default | none`,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },

    ]

    return (
        <>
            <ContentContent onScroll={onScroll} width={'100%'}>
                <TableApi data={data} onScroll={onScroll} label={'Text Props'}/>
            </ContentContent>
        </>
    )
}


const Changelog = (props: tabItemsProps) => {
    const {onScroll} = props
    const steps = [
        ChangelogStep({
            version: '1.0.1',
            time: '2022-10-5',
            list: [{
                type: "feat",
                list: {
                    title: '页面完成情况',
                    items: [
                        <>
                            按钮Button组件页面初始化构建完成：
                            <Text noWrap bolder type={"default"}>基础按钮</Text>
                            <Text noWrap bolder type={"default"}>block按钮</Text>
                            <Text noWrap bolder type={"default"}>颜色主题</Text>
                        </>,
                        <>
                            完成Button基本的Props：
                            <Text noWrap bolder type={"danger"}>widthFitsText</Text>
                            <Text bolder noWrap type={"danger"}>children</Text>
                            <Text noWrap bolder type={"danger"}>onClick</Text>
                            <Text noWrap bolder type={"danger"}>type</Text>
                            <Text noWrap bolder type={"danger"}>border</Text>
                            <Text noWrap bolder type={"danger"}>clickEffect</Text>
                            <Text noWrap bolder type={"danger"}>block</Text>
                            <Text noWrap bolder type={"danger"}>backgroundStyle</Text>
                            <Text noWrap bolder type={"danger"}>disabled</Text>
                        </>
                    ]
                }
            },
            ]
        }),
        ChangelogStep({
            version: '1.0.12',
            time: '2022-10-8',
            list: [{
                type: "feat",
                list: {
                    title: '页面完成情况',
                    items: [
                        <>
                            按钮Button组件页面初始化构建完成：
                            <Text noWrap bolder type={"default"}>基础按钮</Text>
                            <Text noWrap bolder type={"default"}>block按钮</Text>
                            <Text noWrap bolder type={"default"}>颜色主题</Text>
                        </>,
                        <>
                            完成Button基本的Props：
                            <Text noWrap bolder type={"danger"}>widthFitsText</Text>
                            <Text bolder noWrap type={"danger"}>children</Text>
                            <Text noWrap bolder type={"danger"}>onClick</Text>
                            <Text noWrap bolder type={"danger"}>type</Text>
                            <Text noWrap bolder type={"danger"}>border</Text>
                            <Text noWrap bolder type={"danger"}>clickEffect</Text>
                            <Text noWrap bolder type={"danger"}>block</Text>
                            <Text noWrap bolder type={"danger"}>backgroundStyle</Text>
                            <Text noWrap bolder type={"danger"}>disabled</Text>
                        </>
                    ]
                }
            },
                {
                    type: "fix",
                    list: {
                        title: '页面完成情况',
                        items: [
                            <>
                                按钮Button组件页面初始化构建完成：
                                <Text noWrap bolder type={"default"}>基础按钮</Text>
                                <Text noWrap bolder type={"default"}>block按钮</Text>
                                <Text noWrap bolder type={"default"}>颜色主题</Text>
                            </>,
                            <>
                                完成Button基本的Props：
                                <Text noWrap bolder type={"danger"}>widthFitsText</Text>
                                <Text bolder noWrap type={"danger"}>children</Text>
                                <Text noWrap bolder type={"danger"}>onClick</Text>
                                <Text noWrap bolder type={"danger"}>type</Text>
                                <Text noWrap bolder type={"danger"}>border</Text>
                                <Text noWrap bolder type={"danger"}>clickEffect</Text>
                                <Text noWrap bolder type={"danger"}>block</Text>
                                <Text noWrap bolder type={"danger"}>backgroundStyle</Text>
                                <Text noWrap bolder type={"danger"}>disabled</Text>
                            </>
                        ]
                    }
                },
            ]
        }),

    ] as step[]
    return (
        <>
            <ChangelogComponent steps={steps} onScroll={onScroll}/>
        </>
    )
}



