import STYLE from './index.module.less'
import {step} from "@/noddle-components/timeline/types";
import Text from "@/noddle-components/text";
import React, {Fragment, ReactNode} from "react";
import {_object} from "@/noddle-components/globalConfig/types";

interface props {
    version: string
    time: string
    list: {
        type: 'fix' | 'feat' | 'others' | 'change' | string
        list: {
            title: ReactNode | string,
            items: any[]
        }[]
    }[]
}

export default (props: props): step => {
    const {version, list, time} = props
    const types = {
        fix: <Text pure bolder color={"black"} fontSize={18}>🐞 Bug Fixes</Text>,
        feat: <Text pure bolder color={"black"} fontSize={18}>🚀 Features</Text>,
        change: <Text pure bolder color={"black"} fontSize={18}>💡 Changes️</Text>,
        others: <Text pure bolder color={"black"} fontSize={18}>🚧 Others</Text>,
    } as _object
    return {
        title: <div className={STYLE.title}>🌈 Version {version}</div>,
        content: {
            main: <>
                {
                    list?.map((item, index) => {
                        return <Fragment key={index}>
                            <div style={{whiteSpace: "nowrap"}} className={STYLE.type_container}>
                                {types[item.type]}
                            </div>
                            <ul key={index}>
                                {
                                    item.list.map((_item, index) => {
                                        return <li key={index}>
                                            <div style={{marginTop: 8}}>
                                                {_item.title}
                                            </div>
                                            <ul className={STYLE.ul_circle}>
                                                {
                                                    _item.items.map((item, index) => {
                                                        if (item)
                                                            return <li key={index}>{item}</li>
                                                        return ''
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    })
                                }
                            </ul>
                        </Fragment>
                    })
                }
            </>,
            extra: {
                time,
                content: <Text type={"default"} bolder fontSize={16}>{time}</Text>
            }
        }
    }
}