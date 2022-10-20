interface searchResult_songs<T> {
    data: {
        code: number,
        message: string,
        data: {
            responseData: T
        }
    }

    [key: string]: any
}

interface searchResult_songs_responseData {
    recordCount: number,
    records: searchResult_songs_record[]
}

type searchResult_detail_responseData = songs_detail_record[]

interface searchResult_songs_record {
    album: searchResult_album
    artists: searchResult_artist[]
    coverImgUrl: string
    duration: number
    id: string
    name: string
    vipPlayFlag: boolean
    vipFlag: boolean

    [key: string]: any
}

interface searchResult_artist {
    id: string
    name: string
}

type searchResult_album = searchResult_artist

type brLevels = 'hires' | 'lossless' | 'exhigh' | 'standard' | 'none'
const brLevelsMap = {
    hires: {
        tag: 'Hi-Res',
        label: 'Hi-Res'
    },
    lossless: {
        tag: 'SQ',
        label: '无损'
    },
    exhigh: {
        tag: 'HQ',
        label: '极高'
    },
    standard: {
        tag: '标准',
        label: '标准'
    },
    none: {
        tag: '',
        label: ''
    }
}

interface songs_detail_record extends searchResult_songs_record {
    maxBrLevel: brLevels
}

interface song_detail_info extends songs_detail_record {
    albumName: string
    playFlag: boolean
    playUrl: string
    mvId: string
}

interface lyric_responseData {
    id: number
    lyric: string
    noLyric: boolean
    songId: string
    transLyric: string
    txtLyric: string
}

export type {
    searchResult_songs,
    searchResult_songs_record,
    lyric_responseData,
    searchResult_songs_responseData,
    searchResult_detail_responseData,
    songs_detail_record,
    song_detail_info
}

export {brLevelsMap}