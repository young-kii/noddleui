import React, {Fragment, MutableRefObject, useEffect, useRef, useState} from "react";

import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import Modal from "@/noddle-components/modal";

import Drawer from "@/noddle-components/drawer";

import {getAlbumDetailByAlbumId, getDetailBySongIdList, searchSongsByKeyword} from "@/services";
import {
    brLevelsMap,
    searchResult_detail_responseData,
    searchResult_songs,
    searchResult_songs_record,
    songs_detail_record
} from "@/types/netease-music";
import Tag from "@/noddle-components/tag";
import Text from "@/noddle-components/text";
import moment from "moment";
import message from "@/noddle-components/message";

const {confirm} = Modal
export default () => {
    const [keyword, setKeyword] = useState('')
    const [albumId, setAlbumId] = useState('')
    const [songs, setSongs] = useState([]) as any

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const a = useRef(null) as any
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const handleConfirm = () => {
        console.log('ok')
    }
    const handleDrawerCancel = () => {
        setIsDrawerOpen(false)
    }
    const handleShowConfirm = () => {
        confirm({
            title: "这是对话框的标题",
            content: '回家吧✈️',
            onCancel: () => {
                console.log('确定？？？')
            },
            onConfirm: (onCancel) => {
                console.log('okok')
                onCancel()

            }
        })
    }
    const showDrawer = () => {
        setIsDrawerOpen(true)
    }
    const handleSearch = async () => {
        const result = await searchSongsByKeyword(keyword) as searchResult_songs<searchResult_songs_record>
        let list = []
        for (let item of result.data.data.responseData.records) {
            list.push(item.id)
        }
        const res = await getDetailBySongIdList(list) as searchResult_songs<searchResult_detail_responseData>
        console.log(res.data.data.responseData)
        setSongs(res.data.data.responseData)
    }

    const getAlbum = async () => {
        const result = await getAlbumDetailByAlbumId(albumId)
        console.log(result)
    }


    return (
        <>
            {a.current}
            <Space direction={"vertical"}>
                <Space>
                    <input placeholder={'关键词'} onChange={event => setKeyword(event.target.value)}/>
                    <input placeholder={'albumId'} onChange={event => setAlbumId(event.target.value)}/>
                    <Button onClick={handleSearch}>关键词搜索</Button>
                    <Button onClick={getAlbum}>专辑搜索</Button>
                </Space>
                <Space>
                    <Button onClick={() => {
                        setIsModalOpen(true)
                    }}>Open</Button>
                    {/*<Button onClick={handleShowConfirm}>open</Button>*/}
                    <Button type={'danger'} onClick={handleShowConfirm}>王新昊</Button>
                    <Button type={'warning'} onClick={showDrawer}>打开抽屉</Button>
                </Space>
            </Space>
            <Modal zoom={'out'} onConfirm={handleConfirm} onCancel={handleCancel} open={isModalOpen}
                   title={'测试标题'}
            >
                <Space direction={"vertical"} gap={12}>
                    {
                        Array.from({length: 5}).fill('OOOOOK !!!').map((item, index) => {
                            return <div key={index}>{String(item)}</div>
                        })
                    }
                </Space>
            </Modal>
            <Drawer open={isDrawerOpen} title={'抽屉的标题'} onCancel={handleDrawerCancel}>
                {
                    Array.from({length: 10}).fill('funky music啊啊啊啊啊啊').map((item, index) => {
                        return <div key={index}>{String(item) + index}</div>
                    })
                }
            </Drawer>
            <Space direction={"vertical"}>
                {
                    songs.map((item: songs_detail_record) => {
                        return <div key={item?.id} style={{borderBottom: '1px solid black'}}>
                            <div>歌名:{item?.name}</div>
                            <div>歌手:{item?.artists[0]?.name}</div>
                            <Text bolder fontSize={12} type={'danger'}>{item?.vipFlag ? 'VIP' : ''}</Text>
                            <Text bolder fontSize={12} type={'danger'}>{brLevelsMap[item.maxBrLevel]?.tag ?? item.maxBrLevel}</Text>
                            <div>时长:{moment(item?.duration + 60 * 60 * 1000 * 16).format('HH:mm:ss')}</div>
                            专辑封面
                            <img height={40} src={item?.coverImgUrl} alt={''}/>
                        </div>
                    })
                }

            </Space>
            {/*<div style={{backgroundColor: "red", marginTop: 100}}>*/}
            {/*    <div>overview</div>*/}
            {/*    <div>overview</div>*/}
            {/*    <div>overview</div>*/}
            {/*    <Tooltips tips={'ok'}>*/}
            {/*        <div ref={a}>overview</div>*/}
            {/*    </Tooltips>*/}
            {/*</div>*/}

            {/*<Tooltips tips={'ads'}>*/}
            {/*    <div>*/}
            {/*        <div>1232</div>*/}
            {/*        <div>1232</div>*/}
            {/*        <div>1232</div>*/}
            {/*    </div>*/}
            {/*</Tooltips>*/}
            {/*<Space direction={"vertical"}>*/}
            {/*    <Switch theme={"default"} onChange={result => console.log(result)}/>*/}
            {/*    <Switch biggerButton theme={'success'} extraContent={{on: '长一点的长一点点', off: '短一'}}/>*/}
            {/*    <Switch biggerButton extraContent={[*/}
            {/*        {content: <><AddIcon height={14} width={14} color={"white"}/>关注</>, theme: "danger"},*/}
            {/*        {content: <><CheckMark height={14} width={14} color={"white"}/>确认</>, theme: "success"},*/}
            {/*        {content: <><CheckMark height={14} width={14} color={"white"}/>王新昊</>, theme: "warning"},*/}
            {/*        {content: <><BeachIcon height={14} width={14} color={"white"}/>顾逸轩</>, theme: "primary"},*/}
            {/*    ]} type={"moreStatus"} theme={'danger'} onChange={result => console.log(result)}/>*/}
            {/*    <Switch theme={'warning'}/>*/}
            {/*    <DismissIcon/>*/}
            {/*    <CheckMark/>*/}
            {/*    <AddIcon/>*/}

            {/*    <Tooltips theme={"success"} size={"medium"} tips={'测试按钮啊啊啊啊啊'}>*/}
            {/*        <Button>测试按钮</Button>*/}
            {/*    </Tooltips>*/}
            {/*    <Tooltips theme={"success"} size={"large"} tips={'测试按钮啊啊啊啊啊'}>*/}
            {/*        <Button>测试按钮</Button>*/}
            {/*    </Tooltips>*/}
            {/*</Space>*/}
        </>
    )
}
