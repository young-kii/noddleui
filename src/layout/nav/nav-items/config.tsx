import {item} from "@/layout/nav/nav-items/index.d";

const itemList: item[] = [
    {
        id: 1,
        title: 'nav',
        children: [
            {id: 1, title: 'getting_started', to: 'getting-started'},
            {id: 2, title: 'changelog'},
            {id: 3, title: 'overview'},
        ]
    },
    {
        id: 2,
        title: 'config',
        extra: 'components',
        children: [
            {id: 1, title: 'globalConfig'},
        ]
    },
    {
        id: 3,
        title: 'dataEntry',
        extra: 'components',
        children: [
            {id: 1, title: 'select'},
        ]
    },
    {
        id: 4,
        title: 'feedback',
        extra: 'components',
        children: [
            {id: 1, title: 'loading'},
        ]
    },
]

export default itemList
