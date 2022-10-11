import STYLE from './index.module.less'
import React, {ReactNode, useContext, useEffect, useState} from "react";
import DrinkIcon from "@/noddle-components/icons/drink-icon";
import CircleIcon from "@/noddle-components/icons/circle-icon";
import {noddle_main_color} from "@/types";
import globalConfig from "@/pages/components/globalConfig";
import {LocaleConfig} from "@/noddle-components/globalConfig/Config";
import getLocale = LocaleConfig.getLocale;

interface contentContentProps {
    children?: ReactNode
    onScroll?: (scrollTop: number) => any
    width?: number | string
}

interface contentItem {
    id: string
    label: string,
    top: number,
    index: number
}

export default (props: contentContentProps) => {
    const {children, width, onScroll} = props
    const [contentItems, setItems] = useState([]) as any
    const [selectedItem, setSelectedItem] = useState('')
    const [itemIndex, setItemIndex] = useState(0)
    const currentLocale = getLocale()
    let _items: contentItem[] = []
    useEffect(() => {
        const items = document.querySelectorAll('[id*=noddle-contentItem]') as any
        if( items.length !== 0 )
        {
            let newItems = [], index = 0
            for (let item of items) {
                newItems.push({id: item?.id, label: item?.dataset?.label, top: item.offsetTop, index: index++})
            }
            setItems(newItems)
            setSelectedItem(items[0].id)
            _items = newItems
        }
        const scroll = document.getElementById('noddle-content') as HTMLDivElement
        const handleScroll = (e: any) => {
            onScroll?.(e.target.scrollTop)
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
    }, [currentLocale])
    const handleClick = (e: any) => {
        const id = e.target?.dataset?.id
        const scroll = document.getElementById('noddle-content') as HTMLDivElement
        const target = document.getElementById(id) as any
        let scrollToTop = target.offsetTop
        scroll.scrollTo({
            top: scrollToTop + 70,
            behavior: "smooth"
        })
    }
    const renderRight = () => {
        const hasRightMenu = contentItems && contentItems.length !== 0
        return hasRightMenu ? (
            <div className={STYLE.right}>
                <div className={STYLE.active}
                     style={{
                         transform: `translateY(${itemIndex * 24}px)`,
                         position: "absolute",
                         transition: ".3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                         lineHeight: '24px'
                     }}><CircleIcon height={5} width={5} color={noddle_main_color}/>
                </div>
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
        ) : <></>
    }
    return (
        <>
            <div className={STYLE.container}>
                <div className={STYLE.left} style={{width}}>
                    {children}
                </div>
                {
                    renderRight()
                }
            </div>
        </>
    )
}