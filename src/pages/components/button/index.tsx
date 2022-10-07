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

let code = `<Space direction={"vertical"}>
 <Space>
   <Button >填充按钮</Button>
   <Button border={"solid"}>描边按钮</Button>
   <Button border={"dashed"}>虚框按钮</Button>
 </Space>
 <Space>
  <Button border={"text"} >文字按钮</Button>
  <Button border={"text"} backgroundStyle={"border"}>文字按钮</Button>
  <Button border={"text"} backgroundStyle={"none"}>文字按钮</Button>
 </Space>
</Space>`

export default () => {
    return <>
        <PageBase Demo={Demo} Api={Api} Changelog={Changelog} title={"Button 按钮"}
                  description={"按钮用于链接用户点击的操作，例如“取消”，“确认”，“提交”等。"}/>
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
                <ContentItem id={'basic-button'} label={'基础按钮'} paddingTop={64}>
                    <>
                        <h3>基础按钮</h3>
                        <p>基础按钮包括填充按钮、描边按钮、虚框按钮和文字按钮。</p>
                        <h4>填充按钮</h4>
                        <p>一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。</p>
                        <h4>描边按钮</h4>
                        <p>描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。</p>
                        <h4>虚框按钮</h4>
                        <p>按钮边框线为虚线，常用于表单中的添加配置项。</p>
                        <h4>文字按钮</h4>
                        <p>直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁。</p>
                    </>
                </ContentItem>
                <CodeBox code={code}>
                    <Space direction={"vertical"}>
                        <Space>
                            <Button>填充按钮</Button>
                            <Button border={"solid"}>描边按钮</Button>
                            <Button border={"dashed"}>虚框按钮</Button>
                        </Space>
                        <Space>
                            <Button border={"text"}>文字按钮</Button>
                            <Button border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                            <Button border={"text"} backgroundStyle={"none"}>文字按钮</Button>
                        </Space>
                    </Space>
                </CodeBox>
                <ContentItem id={'block-button'} label={'block按钮'} paddingTop={64}>
                    <>
                        <h3>Block按钮</h3>
                        <p><Text type={"default"}>Block</Text>属性将使其宽度适合其父元素宽度。</p>
                    </>
                </ContentItem>
                <CodeBox code={'block button'}>
                    <Space direction={"vertical"} width={'100%'}>
                        <Button type={"primary"} block>填充按钮</Button>
                        <Button block border={"solid"}>描边按钮</Button>
                        <Button block border={"dashed"}>虚框按钮</Button>
                        <Button block border={"text"}>文字按钮</Button>
                        <Button block border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                    </Space>
                </CodeBox>
                <ContentItem id={'change-color'} label={'颜色主题'} paddingTop={64}>
                    <>
                        <h3>颜色主题</h3>
                        <p>初始主题颜色有以下几种：浅灰色、蓝色、红色、黄色、绿色。</p>
                    </>
                </ContentItem>
                <CodeBox code={'nothing here, you f**king idiot'}>
                    <Space direction={"vertical"}>
                        <Space>
                            <Button>填充按钮</Button>
                            <Button border={"solid"}>描边按钮</Button>
                            <Button border={"dashed"}>虚框按钮</Button>
                            <Button border={"text"}>文字按钮</Button>
                            <Button border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                            <Button border={"text"} backgroundStyle={"none"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"success"}>填充按钮</Button>
                            <Button type={"success"} border={"solid"}>描边按钮</Button>
                            <Button type={"success"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"success"} border={"text"}>文字按钮</Button>
                            <Button type={"success"} border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                            <Button type={"success"} border={"text"} backgroundStyle={"none"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"danger"}>填充按钮</Button>
                            <Button type={"danger"} border={"solid"}>描边按钮</Button>
                            <Button type={"danger"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"danger"} border={"text"}>文字按钮</Button>
                            <Button type={"danger"} border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                            <Button type={"danger"} border={"text"} backgroundStyle={"none"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"warning"}>填充按钮</Button>
                            <Button type={"warning"} border={"solid"}>描边按钮</Button>
                            <Button type={"warning"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"warning"} border={"text"}>文字按钮</Button>
                            <Button type={"warning"} border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                            <Button type={"warning"} border={"text"} backgroundStyle={"none"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"primary"}>填充按钮</Button>
                            <Button type={"primary"} border={"solid"}>描边按钮</Button>
                            <Button type={"primary"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"primary"} border={"text"}>文字按钮</Button>
                            <Button type={"primary"} border={"text"} backgroundStyle={"border"}>文字按钮</Button>
                            <Button type={"primary"} border={"text"} backgroundStyle={"none"}>文字按钮</Button>
                        </Space>
                    </Space>
                </CodeBox>
            </ContentContent>
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
            description: <>当<strong>border</strong>为<Text pure bolder type={'danger'}>text</Text>时，按钮背景的样式：填充、边框、隐藏</>,
            type: 'default | border | none',
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
                <TableApi data={data} onScroll={onScroll} label={'Button Props'}/>
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

    ] as step[]
    return (
        <>
            <ChangelogComponent steps={steps} onScroll={onScroll}/>
        </>
    )
}



