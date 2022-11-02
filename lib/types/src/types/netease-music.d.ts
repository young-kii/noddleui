interface searchResult_songs<T> {
    data: {
        code: number;
        message: string;
        data: {
            responseData: T;
        };
    };
    [key: string]: any;
}
interface searchResult_songs_responseData {
    recordCount: number;
    records: searchResult_songs_record[];
}
declare type searchResult_detail_responseData = songs_detail_record[];
interface searchResult_songs_record {
    album: searchResult_album;
    artists: searchResult_artist[];
    coverImgUrl: string;
    duration: number;
    id: string;
    name: string;
    vipPlayFlag: boolean;
    vipFlag: boolean;
    [key: string]: any;
}
interface searchResult_artist {
    id: string;
    name: string;
}
declare type searchResult_album = searchResult_artist;
declare type brLevels = 'hires' | 'lossless' | 'exhigh' | 'standard' | 'none';
declare const brLevelsMap: {
    hires: {
        tag: string;
        label: string;
    };
    lossless: {
        tag: string;
        label: string;
    };
    exhigh: {
        tag: string;
        label: string;
    };
    standard: {
        tag: string;
        label: string;
    };
    none: {
        tag: string;
        label: string;
    };
};
interface songs_detail_record extends searchResult_songs_record {
    maxBrLevel: brLevels;
}
interface song_detail_info extends songs_detail_record {
    albumName: string;
    playFlag: boolean;
    playUrl: string;
    mvId: string;
}
interface lyric_responseData {
    id: number;
    lyric: string;
    noLyric: boolean;
    songId: string;
    transLyric: string;
    txtLyric: string;
}
export type { searchResult_songs, searchResult_songs_record, lyric_responseData, searchResult_songs_responseData, searchResult_detail_responseData, songs_detail_record, song_detail_info };
export { brLevelsMap };
