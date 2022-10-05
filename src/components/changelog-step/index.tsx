import STYLE from './index.module.less'
import {step} from "@/noddle-components/steps/types";
import Text from "@/noddle-components/text";
import React, {ReactNode} from "react";
import {_object} from "@/noddle-components/globalConfig/types";
import it from "node:test";

interface props {
    version: string
    type: 'fix' | 'feat' | 'other' | 'change' | string
    time: string
    list: {
        type: props["type"],
        list: ReactNode[] | string[]
    }[]
}

export default (props: props): step => {
    const {version, type, list, time} = props
    const types = {
        fix: <></>,
        feat: <Text pure bolder color={"black"} fontSize={18}>🚀 Features</Text>,
        change: <></>,
        other: <></>
    } as _object
    return {
        title: <div className={STYLE.title}>🌈 Version {version}</div>,
        content: {
            main: <>
                {
                    list?.map((item, index) => {
                        return <ul key={index} className={STYLE.ul_container}>
                            <li>
                                {types[type]}
                                <ul className={STYLE.ul_circle}>
                                    {
                                        item.list.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    })
                }
            </>,
            extra: {
                content: <Text type={"success"}>{time}</Text>
            }
        }
    }
}