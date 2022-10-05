import STYLE from './index.module.less'
import {step} from "@/noddle-components/steps/types";
import Text from "@/noddle-components/text";
import React, {ReactNode} from "react";
import {_object} from "@/noddle-components/globalConfig/types";

interface props {
    version: string
    time: string
    list: {
        type: 'fix' | 'feat' | 'others' | 'change' | string
        list: ReactNode[] | string[]
    }[]
}

export default (props: props): step => {
    const {version, list, time} = props
    const types = {
        fix: <Text pure bolder color={"black"} fontSize={18}>🐞 Bug Fixes</Text>,
        feat: <Text pure bolder color={"black"} fontSize={18}>🚀 Features</Text>,
        change: <Text pure bolder color={"black"} fontSize={18}>❗ Breaking Changes️</Text>,
        others: <Text pure bolder color={"black"} fontSize={18}>🚧 Others</Text>,
    } as _object
    return {
        title: <div className={STYLE.title}>🌈 Version {version}</div>,
        content: {
            main: <>
                {
                    list?.map((item, index) => {
                        return <ul key={index} className={STYLE.ul_container}>
                            <li>
                                <div style={{whiteSpace: "nowrap"}}>
                                    {types[item.type]}
                                </div>
                                <ul className={STYLE.ul_circle}>
                                    {
                                        item.list.map((item, index) => {
                                            if (item)
                                                return <li key={index}>{item}</li>
                                            return ''
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
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