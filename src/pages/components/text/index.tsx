import ContentContent from "@/components/content-content";
import ContentItem from "@/components/content-item";
import CodeBox from "@/components/codeBox";
import React, {useEffect, useState} from "react";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import Text from "@/noddle-components/text";
import {codeBoxConfigPanelStyle, DataType} from "@/types/common";
import TableApi from "@/components/table-api";
import {step} from "@/noddle-components/timeline/types";
import ChangelogStep from "@/components/changelog-step";
import ChangelogComponent from "@/components/changelog-component";
import PageBase from "@/components/page-base";
import BeachIcon from "@/noddle-components/icons/beach-icon";
import Divider from "@/noddle-components/divider";
import Select from "@/noddle-components/select";
import Switch from "@/noddle-components/switch";
import {useTranslation} from "@/noddle-components/globalConfig/Config";
import Locales from "@/locales";
import allLocales = Locales.allLocales;
import {getLinksToDocument, linkTo} from "@/utils";

export default () => {
    const translate = useTranslation()
    return <>
        <PageBase title={translate('page.text.header.title')} description={translate('page.text.header.description')}
                  Demo={Demo} Api={Api}
                  Changelog={Changelog}/>
    </>
}

export interface tabItemsProps {
    onScroll?: (scrollTop: number) => any
}

const Demo = (props: tabItemsProps) => {
    const translate = useTranslation()
    const {onScroll} = props
    return (
        <>
            <ContentContent onScroll={onScroll}>
                <ContentItem id={'basic-usage'} label={translate('common.basicUsage')} paddingTop={64}>
                    <>
                        <h3>{translate('common.basicUsage')}</h3>
                        <p>{translate('page.text.section1.p1')}</p>
                        <CodeBox1/>
                    </>
                </ContentItem>
            </ContentContent>
        </>
    )
}

const CodeBox1 = () => {
    const translate = useTranslation()
    const [decoration, setDecoration] = useState('none') as any
    const [type, setType] = useState('default') as any
    const [bolder, setBolder] = useState(false) as any
    const [pure, setPure] = useState(false) as any
    const [color, setColor] = useState('') as any
    const [onCopy, setOnCopy] = useState(false) as any
    const [lineType, setLineType] = useState('solid') as any
    const [isConfigChanged, setIsConfigChanged] = useState(false) as any
    const [status1, setStatus1] = useState() as any
    const [status2, setStatus2] = useState() as any
    const [status3, setStatus3] = useState() as any
    const [status4, setStatus4] = useState() as any
    const onReset = () => {
        setColor('')
        setIsConfigChanged(false)
    }
    useEffect(() => {
        if (color !== '')
            setIsConfigChanged(type)
    }, [color])
    const ConfigPanel = () => {
        return (
            <div className={'noddle-configPanel'}>
                <Divider position={"start"} spacing={'36px'}>{translate('common.configuration')}</Divider>
                <Space style={codeBoxConfigPanelStyle} direction={'vertical'}>
                    <Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>{translate('common.theme') + '：'}</Text>
                            <Switch status={status1} type={"moreStatus"} extraContent={[
                                {content: translate('common.theme.primary'), theme: 'primary'},
                                {content: translate('common.theme.default'), default: true, theme: 'default'},
                                {content: translate('common.theme.danger'), theme: 'danger'},
                                {content: translate('common.theme.warning'), theme: 'warning'},
                                {content: translate('common.theme.success'), theme: 'success'}
                            ]} onChange={result => {
                                setStatus1(result.status)
                                setType(result.theme)
                            }}/>
                        </Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>{translate('common.decoration') + '：'}</Text>
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
                                    <Text pure color={'black'} fontSize={14}>{translate('common.type') + '：'}</Text>
                                    <Select autoWidth value={lineType} onChange={value => setLineType(value.value)}>
                                        <Select.Option value={'solid'}>solid</Select.Option>
                                        <Select.Option value={'dashed'}>dashed</Select.Option>
                                        <Select.Option value={'dotted'}>dotted</Select.Option>
                                    </Select>
                                </Space>
                                : ''
                        }
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>{translate('common.color') + '：'}</Text>
                            <input type={"color"} value={color} onChange={e => setColor(e.target.value)}/>
                        </Space>
                    </Space>
                    <Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>{translate('common.bolder') + '：'}</Text>
                            <Switch status={status2} onChange={result => {
                                setStatus2(result)
                                setBolder(result)
                            }}/>
                        </Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>{translate('page.text.onlyText') + '：'}</Text>
                            <Switch status={status3} onChange={result => {
                                setStatus3(result)
                                setPure(result)
                            }}/>
                        </Space>
                        <Space gap={0}>
                            <Text pure color={'black'} fontSize={14}>{translate('page.text.copyable') + '：'}</Text>
                            <Switch status={status4} onChange={result => {
                                setStatus4(result)
                                setOnCopy(result)
                            }}/>
                        </Space>
                    </Space>
                </Space>
            </div>
        )
    }
    const code = `<Text 
 type="${type}"
 pure={${pure}}
 lineType="${lineType}"${color ? ('\n color="' + color + '"') : ''}
 decoration="${decoration}"
 bolder={${bolder}}
 onCopy={${onCopy}}
>
 ${translate('page.text.testText')}
</Text>
`
    return (
        <>
            <CodeBox position={"center"} code={code} isConfigChanged={isConfigChanged} config={ConfigPanel()}
                     onReset={onReset}>
                <Space>
                    <Text type={type}
                          color={color}
                          pure={pure}
                          lineType={lineType}
                          decoration={decoration}
                          bolder={bolder}
                          onCopy={onCopy}
                    >
                        {translate('page.text.testText')}
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
            property: 'onCopy',
            type: <><Text pure bolder type={"warning"}>boolean</Text><Text pure bolder
                                                                           type={"danger"}>{' | (value?: string) => any'}</Text></>,
            description: '用于复制文本内容',
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'noWrap',
            description: '控制文本是否自动换行',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'children',
            description: '显示的文本内容',
            type: 'string',
            required: 'YES',
            defaultValue: '-'
        },
        {
            property: 'type',
            description: '文本的颜色主题类型',
            type: 'default | danger | success | primary | warning',
            required: 'NO',
            defaultValue: <Text bolder type={"default"}>default</Text>
        },
        {
            property: 'pure',
            description: '是否纯文本（无背景色）',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'bolder',
            description: '文字加粗',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'decoration',
            description: '文字装饰的样式',
            type: 'underline | through | overline | none',
            required: 'NO',
            defaultValue: 'none'
        },
        {
            property: 'lineType',
            description: <>装饰线条的类型,当<strong>decoration</strong>不为<Text bolder type={'danger'} pure>none</Text>时生效</>,
            type: 'solid | dashed | dotted',
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'isButton',
            description: '文本是否添加按钮效果',
            type: <Text pure bolder type={"warning"}>boolean</Text>,
            required: 'NO',
            defaultValue: <Text bolder type={"danger"}>false</Text>
        },
        {
            property: 'onClick',
            description: <>点击事件的回调，当<strong>isButton</strong>为<Text pure bolder type={'danger'}>true</Text>时生效</>,
            type: '( Event ) => void',
            required: 'NO',
            defaultValue: <Text bolder type={"default"}>default</Text>
        },
        {
            property: 'fontSize',
            description: '字体大小',
            type: 'number',
            required: 'NO',
            defaultValue: 14
        },
        {
            property: 'color',
            description: '字体的颜色',
            type: <Text isButton pure bolder type={'primary'} decoration={'underline'} lineType={'solid'}
                        onClick={() => linkTo(getLinksToDocument('CSS', 'color'))}>COLOR</Text>,
            required: 'NO',
            defaultValue: '-'
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
    const timeline = [
        ChangelogStep({
            version: '1.0.1',
            time: '2022-10-21',
            list: [{
                type: "feat",
                list: [{
                    title: '页面完成情况',
                    items: [
                        <>
                            Text文本组件页面初始化构建完成：
                            <Text noWrap bolder type={"default"}>基本用法</Text>
                        </>,
                        <>
                            完成Text基本的Props：
                            <Text noWrap bolder type={"danger"}>onCopy</Text>
                            <Text bolder noWrap type={"danger"}>noWrap</Text>
                            <Text noWrap bolder type={"danger"}>children</Text>
                            <Text noWrap bolder type={"danger"}>type</Text>
                            <Text noWrap bolder type={"danger"}>pure</Text>
                            <Text noWrap bolder type={"danger"}>bolder</Text>
                            <Text noWrap bolder type={"danger"}>decoration</Text>
                            <Text noWrap bolder type={"danger"}>lineType</Text>
                            <Text noWrap bolder type={"danger"}>isButton</Text>
                            <Text noWrap bolder type={"danger"}>onClick</Text>
                            <Text noWrap bolder type={"danger"}>fontSize</Text>
                            <Text noWrap bolder type={"danger"}>color</Text>
                        </>
                    ]
                }]
            },
            ]
        }),

    ] as step[]
    return (
        <>
            <ChangelogComponent timeline={timeline} onScroll={onScroll}/>
        </>
    )
}



