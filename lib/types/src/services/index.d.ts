declare const searchSongsByKeyword: (keyword: string) => Promise<void | import("axios").AxiosResponse<any, any>>;
declare const getDetailBySongIdList: (songIdList: string[]) => Promise<void | import("axios").AxiosResponse<any, any>>;
declare const getAlbumDetailByAlbumId: (albumId: string) => Promise<void | import("axios").AxiosResponse<any, any>>;
declare const getSongDetail: (songId: string, withUrl?: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
declare const getLyrics: (songId: string) => Promise<import("axios").AxiosResponse<any, any>>;
declare const getMv: (mvId: string) => Promise<import("axios").AxiosResponse<any, any>>;
export { searchSongsByKeyword, getDetailBySongIdList, getAlbumDetailByAlbumId, getSongDetail, getLyrics, getMv };
