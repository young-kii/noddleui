import STYLE from './index.module.less'
import React, {ReactNode, useEffect, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";

interface contentContentProps {
    children?: ReactNode
}

interface contentItem {
    id: string
    label: string,
    top: number,
    index: number
}

export default (props: contentContentProps) => {
    const {children} = props
    const [contentItems, setItems] = useState([]) as any
    const [selectedItem, setSelectedItem] = useState('')
    const [itemIndex, setItemIndex] = useState(0)
    let _items: contentItem[] = []
    useEffect(() => {
        const items = document.querySelectorAll('[id*=noddle-contentItem]') as any
        let newItems = [],index = 0
        for (let item of items) {
            newItems.push({id: item?.id, label: item?.dataset?.label, top: item.offsetTop, index: index++})
        }
        setItems(newItems)
        setSelectedItem(items[0].id)
        _items = newItems
        const scroll = document.getElementById('noddle-content') as HTMLDivElement
        const handleScroll = (e: any) => {
            for (let _item of _items) {
                if (e.target.scrollTop >= _item.top + 64) {
                    setSelectedItem(_item.id)
                    setItemIndex(_item.index)
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
                <div className={STYLE.left}>
                    {children}
                </div>
                <div className={STYLE.right}>
                    <div className={STYLE.active}
                         style={{transform:`translateY(${itemIndex * 24}px)`,position:"absolute",transition: ".3s cubic-bezier(0.165, 0.84, 0.44, 1)",fontSize:'24px',lineHeight:'24px'}}>·</div>
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