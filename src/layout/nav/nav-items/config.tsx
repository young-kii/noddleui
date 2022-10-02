import {item} from "@/layout/nav/nav-items/types";

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
        title: 'general',
        extra: 'components',
        children: [
            {id: 1, title: 'button'},
            {id: 2, title: 'text'},
        ]
    },
    {
        id: 4,
        title: 'layout',
        extra: 'components',
        children: [
            {id: 1, title: 'space'},
            {id: 2, title: 'divider'},
        ]
    },
    {
        id: 5,
        title: 'dataEntry',
        extra: 'components',
        children: [
            {id: 1, title: 'select'},
            {id: 2, title: 'form'},
        ]
    },
    {
        id: 6,
        title: 'dataDisplay',
        extra: 'components',
        children: [
            {id: 1, title: 'table'},
        ]
    },
    {
        id: 7,
        title: 'feedback',
        extra: 'components',
        children: [
            {id: 1, title: 'loading'},
        ]
    },

]

export default itemList
