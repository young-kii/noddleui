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
import Steps from "@/noddle-components/steps";

export default () => {
    return <>
        <PageBase title={'Steps 步骤条'} description={'引导用户按照流程完成任务的导航条，也可用于时间轴展示'} Demo={Demo} Api={Api}
                  Changelog={Changelog}/>
    </>
}

export interface tabItemsProps {
    onScroll?: (scrollTop: number) => any
}

const Demo = (props: tabItemsProps) => {
    const {onScroll} = props
    const steps = [
        {
            title: '事件一',
            content: {
                main: ' 所谓事件一，关键是事件一需要如何写。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 总' +
                    '结的来说， 培根在不经意间这样说过，深窥自己的心，而后发觉一切的奇迹在你自己。带着这句话，我们还要更' +
                    '加慎重的审视这个问题： 所谓事件一，关键是事件一需要如何写。 我们不得不面对一个非常尴尬的事实，那就是，' +
                    ' 而这些并不是完全重要，更加重要的问题是， 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 既然如何，' +
                    ' 问题的关键究竟为何? 美华纳在不经意间这样说过，勿问成功的秘诀为何，且尽全力做你应该做的事吧。',
                extra: {
                    time: '2022-10-6',
                    content: '2022-10-6',
                    position: 'behind-title'
                }
            }
        },
        {
            title: '事件二',
            content: {
                main: '本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 就我个人来说，事件二对我的意义，不能不说非常重大。 别林斯基曾经说过，好的书籍是最贵重的珍' +
                    '宝。这不禁令我深思。 我们都知道，只要有意义，那么就必须慎重考虑。 卡莱尔在不经意间这样说过，过去一切时代的精华尽在书中。这启发了我， 现在，解决事件' +
                    '二的问题，是非常非常重要的。 所以， 我认为， 每个人都不得不面对这些问题。 在面对这种问题时， 吉格·金克拉曾经说过，如果你能做梦，你就能实现它。这启发' +
                    '了我， 生活中，若事件二出现了，我们就不得不考虑它出现了的事实。',
                extra: {
                    time: '2022-10-7',
                    content: '2022-10-7',
                    position: 'behind-title'
                }
            }
        },
        {
            title: '事件三',
            content: {
                main: '而这些并不是完全重要，更加重要的问题是， 现在，解决事件三的问题，是非常非常重要的。 所以， 现在，解决事件三的问题，是非常非常重要的。 所以， 问题的关' +
                    '键究竟为何? 现在，解决事件三的问题，是非常非常重要的。 所以， 总结的来说， 事件三因何而发生?卡耐基曾经' +
                    '说过，我们若已接受最坏的，就再没有什么损失。这启发了我， 总结的来说， 事件三因何而发生?',
                extra: {
                    time: '2022-10-11',
                    content: '2022-10-11',
                    position: 'behind-title'
                }
            }
        }
    ] as step[]
    return (
        <>
            <ContentContent onScroll={onScroll}>
                <ContentItem id={'basic-usage'} label={'基本用法'} paddingTop={64}>
                    <>
                        <h3>基本用法</h3>
                        <p>步骤条内容主要包括以下三部分：<Text bolder>标题</Text><Text bolder>主要内容</Text><Text bolder>额外内容</Text></p>
                        <CodeBox code={''}>
                            <Steps steps={steps}/>
                        </CodeBox>
                    </>

                </ContentItem>

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
                <TableApi data={data} onScroll={onScroll} label={'Steps Props'}/>
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



