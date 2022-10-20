import axios from "axios";

const baseUrl = '/musicApi/api/growth/external/sandbox/request'
const getCommonData = () => ({
    accessToken: "y8f3b107ed962c79ade975991c3cde622c77459eb28d2b14af",
    appId: "a301020000000000ac22dc8fa20e3795",
    timestamp: new Date().valueOf(),
})
const searchSongsByKeyword = (keyword: string) => {
    const bizContentJson = JSON.stringify({
        keyword,
        limit: 20,
        offset: 0
    })
    return axios.post(
        baseUrl,
        {
            ...getCommonData(),
            bizContentJson,
            url: "/openapi/music/basic/search/song/get/v2"
        }
    ).catch(error => console.log(error))
}

const getDetailBySongIdList = (songIdList: string[]) => {
    const bizContentJson = JSON.stringify({
        songIdList
    })
    return axios.post(
        baseUrl,
        {
            ...getCommonData(),
            bizContentJson,
            url: "/openapi/music/basic/song/list/get/v2",
        }
    ).catch(error => console.log(error))
}

const getAlbumDetailByAlbumId = (albumId: string) => {
    const bizContentJson = JSON.stringify({
        albumId
    })
    return axios.post(
        baseUrl,
        {
            ...getCommonData(),
            bizContentJson,
            url: "/openapi/music/basic/album/detail/get/v2",
        }
    ).catch(error => console.log(error))
}

const getSongDetail = (songId: string, withUrl?: boolean) => {
    const bizContentJson = JSON.stringify({
        songId,
        withUrl
    })
    return axios.post(
        baseUrl,
        {
            ...getCommonData(),
            bizContentJson,
            url: "/openapi/music/basic/song/detail/get/v2",
        }
    )
}

const getLyrics = (songId: string) => {
    const bizContentJson = JSON.stringify({
        songId
    })
    return axios.post(
        baseUrl,
        {
            ...getCommonData(),
            bizContentJson,
            url: "/openapi/music/basic/song/lyric/get/v2",
        }
    )
}

const getMv = (mvId: string) => {
    const bizContentJson = JSON.stringify({
        mvId
    })
    return axios.post(
        baseUrl,
        {
            ...getCommonData(),
            bizContentJson,
            url: "/openapi/music/basic/mv/detail/get/v2",
        }
    )
}

export {searchSongsByKeyword, getDetailBySongIdList, getAlbumDetailByAlbumId, getSongDetail, getLyrics, getMv}