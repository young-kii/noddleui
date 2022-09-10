import STYLE from './index.module.less'
import React, {ReactNode, useEffect, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";

interface contentContentProps {
    children?: ReactNode
}

interface contentItem {
    id: string
    label: string,
    top: number
}

export default (props: contentContentProps) => {
    const {children} = props
    const [contentItems, setItems] = useState([]) as any
    const [selectedItem, setSelectedItem] = useState('')
    let _items: contentItem[] = []
    useEffect(() => {
        const items = document.querySelectorAll('[id*=noddle-contentItem]') as any
        let newItems = []
        for (let item of items) {
            newItems.push({id: item?.id, label: item?.dataset?.label, top: item.offsetTop})
        }
        setItems(newItems)
        setSelectedItem(items[0].id)
        _items = newItems
        const scroll = document.getElementById('noddle-content') as HTMLDivElement
        const handleScroll = (e: any) => {
            for (let _item of _items) {
                if (e.target.scrollTop >= _item.top + 64) {
                    setSelectedItem(_item.id)
                }
            }
        }
        scroll.addEventListener('scroll', handleScroll)
        return () => {
            scroll.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const handleClick = (e: any) => {
        const id = e.target?.dataset?.id
        const scroll = document.getElementById('noddle-content') as HTMLDivElement
        const target = document.getElementById(id) as any
        let scrollToTop = target.offsetTop === 0 ? 5 : target.offsetTop
        scroll.scrollTo({
            top: scrollToTop + 64,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className={STYLE.container}>
                <div className={STYLE.left}>{children}</div>
                <div className={STYLE.right}>
                    {
                        contentItems.map((item: contentItem) => {
                            return <div key={item.id}
                                        data-id={item.id}
                                        data-selected={item.id === selectedItem}
                                        className={STYLE.nav + ' ' + (item.id === selectedItem ? STYLE.active : '')}
                                        onClick={(e) => handleClick(e)}>{item.label}
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}