import Card from "@/noddle-components/card";
import STYLE from './index.module.less'
import React, {ReactEventHandler, useRef, useState} from "react";
import {
    getAlbumDetailByAlbumId,
    getDetailBySongIdList,
    getLyrics, getMv,
    getSongDetail,
    searchSongsByKeyword
} from "@/services";
import {
    brLevelsMap, lyric_responseData,
    searchResult_detail_responseData,
    searchResult_songs,
    searchResult_songs_record, song_detail_info,
    songs_detail_record
} from "@/types/netease-music";
import Button from "@/noddle-components/button";
import Text from "@/noddle-components/text";
import Space from "@/noddle-components/space";
import {linkTo} from "@/utils";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import message from "@/noddle-components/message";
import notification from "@/noddle-components/notification";

export default () => {

    const [keyword, setKeyword] = useState('')
    const [albumId, setAlbumId] = useState('')
    const [mvId, setMvId] = useState('')
    const lyricText = useRef('')
    const [currentTime, setCurrentTime] = useState(0)
    const currentLyricRef = useRef('')
    const [currentLyric, setCurrentLyric] = useState('歌词')
    const [currentLyricArray, setCurrentLyricArray] = useState([] as {time: number, lyric: string}[])
    const [lyric, setLyric] = useState({} as lyric_responseData)
    const [songId, setSongId] = useState('')
    const [currentSong, setCurrentSong] = useState({})
    const [songs, setSongs] = useState([]) as any
    const getSong = (item: songs_detail_record | song_detail_info) => {
        if (item && Object.keys(item).length !== 0)
            return (
                <div key={item.id} className={STYLE.song} onClick={async () => {
                    setSongId(item.id)
                    console.log(item,111)
                    const result = await getSongDetail(item.id, true) as searchResult_songs<song_detail_info>
                    setMvId(result.data.data.responseData.mvId)
                    console.log(result.data.data.responseData,222)
                    setCurrentSong(result.data.data.responseData)
                    if (item?.playUrl) {
                        const handleTimeUpdate:ReactEventHandler<HTMLAudioElement> = (e) => {
                            console.log(e.currentTarget.currentTime)
                            for(let index = 0; index < currentLyricArray.length; index ++) {
                                if(index + 1 === currentLyricArray.length && e.currentTarget.currentTime > 30)
                                {
                                    if(currentLyricRef.current !== (currentLyricArray[index].lyric))
                                    {
                                        notification.success({content: currentLyricArray[index].lyric, title: item.name})
                                        setTimeout(()=>{
                                            currentLyricRef.current = currentLyricArray[index].lyric
                                            setCurrentLyric(currentLyricArray[index].lyric)
                                        },1)
                                    }
                                    break
                                }
                                else if((e.currentTarget.currentTime * 1000 ) > currentLyricArray[index].time && (e.currentTarget.currentTime * 1000 ) < currentLyricArray[index + 1].time) {
                                    if(currentLyricRef.current !== (currentLyricArray[index].lyric))
                                    {
                                        notification.success({content: currentLyricArray[index].lyric, title: item.name})
                                        setTimeout(()=> {
                                            currentLyricRef.current = currentLyricArray[index].lyric
                                            setCurrentLyric(currentLyricArray[index].lyric)
                                        },1)
                                    }
                                    break
                                }
                            }

                        }
                        const div = document.getElementById('audio') as any
                        const root = createRoot(document.createElement('audio'))
                        const newItem = ReactDOM.createPortal(<audio src={item?.playUrl} onTimeUpdate={handleTimeUpdate} controls autoPlay/>, div)
                        root.render(newItem)
                    }
                }}>
                    <img className={STYLE.coverImg} src={item.coverImgUrl} alt={''}/>
                    <div className={STYLE.right}>
                        <div className={STYLE.name}>
                            {item.name}
                        </div>
                        <div className={STYLE.bottom}>
                            <Text bolder fontSize={12} type={'danger'}>{item.vipFlag ? 'VIP' : ''}</Text>
                            <Text bolder fontSize={12}
                                  type={'danger'}>{brLevelsMap[item.maxBrLevel]?.tag ?? item.maxBrLevel}</Text>
                            <div className={STYLE.artists}>
                                {
                                    item.artists.map(item => item.name).join('/')
                                }
                            </div>
                            <div style={{padding: '0 2px', display: "flex", alignItems: "center"}}>-</div>
                            <div className={STYLE.albumName} title={item?.album?.name}>
                                {item?.album?.name || item.albumName}
                            </div>
                        </div>
                    </div>
                </div>
            )
        else return null
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
    const getSongDetail_ = async () => {
        const result = await getSongDetail(songId, true) as searchResult_songs<song_detail_info>
        console.log(result.data.data.responseData)
        setCurrentSong(result.data.data.responseData)
    }
    const handleGetLyrics = async () => {
        const result = await getLyrics(songId) as searchResult_songs<lyric_responseData>
        console.log(result)
        setLyric(result.data.data.responseData)
        lyricText.current = result.data.data.responseData.lyric
        const str = lyricText.current.replaceAll('\n',' ')
        const reg = /[^\[](?<min>.*?):(?<second>.*?)](?<text>.*?)(\s\[|$)/g
        const matchResult = str.matchAll(reg) as any
        let lyricsArray = []
        for(let item of matchResult)
        {
            let curTime = Math.floor((Number(item.groups.min) * 60 + Number(item.groups.second)) * 1000)
            if(!isNaN(curTime) && item.groups.text)
            lyricsArray.push({time: curTime, lyric: item.groups.text})
        }
        console.log(lyricText.current)
        setCurrentLyricArray(lyricsArray)
        console.log(lyricsArray)
        console.log(result)
    }

    const handleGetMv = async () => {
        const result = await getMv(mvId)
        console.log(result)
    }

    return (
        <div style={{padding: 20}}>
            <Space>
                <input placeholder={'关键词'} onChange={event => setKeyword(event.target.value)}/>
                <Button onClick={handleSearch}>搜索</Button>
                <input placeholder={'歌曲id'} onChange={event => setSongId(event.target.value)}/>
                <Button onClick={getSongDetail_}>详情</Button>
                <Button onClick={handleGetLyrics}>搜索歌词</Button>
                <Button onClick={handleGetMv}>搜索MV</Button>
            </Space>
            <div style={{height: 300, padding: 20}}>
                <Card>
                    {
                        songs.map((item: songs_detail_record) => getSong(item))
                    }
                </Card>
            </div>
            <div style={{height: 100, padding: 20}}>
                <Card>
                    {
                        getSong(currentSong as songs_detail_record)
                    }
                </Card>
            </div>
            <div id={'audio'} style={{ padding: 20}}/>
            <div style={{minHeight: 120, padding: 20}}>
                <Card>
                    {/*<div>{lyric?.lyric}</div>*/}
                    {
                        <div className={STYLE.lyric}>{currentLyric}</div>
                    }
                </Card>
            </div>
            <input className={STYLE.rangeInput} type={"range"} onChange={(e) => console.log(e.target.value)}/>
        </div>
    )
}