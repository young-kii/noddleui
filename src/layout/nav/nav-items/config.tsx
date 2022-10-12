import {item} from "@/layout/nav/nav-items/types";

const itemList: item[] = [
    {
        title: 'nav',
        children: [
            {title: 'getting_started', to: 'getting-started'},
            {title: 'changelog'},
            {title: 'overview'},
        ]
    },
    {
        title: 'config',
        extra: 'components',
        children: [
            {title: 'globalConfig'},
        ]
    },
    {
        title: 'general',
        extra: 'components',
        children: [
            {title: 'button'},
            {title: 'text'},
        ]
    },
    {
        title: 'layout',
        extra: 'components',
        children: [
            {title: 'space'},
            {title: 'divider'},
        ]
    },
    {
        title: 'navigation',
        extra: 'components',
        children: [
            {title: 'steps'},
        ]
    },
    {
        title: 'dataEntry',
        extra: 'components',
        children: [
            {title: 'form'},
            {title: 'select'},
            {title: 'switch'},
        ]
    },
    {
        title: 'dataDisplay',
        extra: 'components',
        children: [
            {title: 'table'},
            {title: 'tooltips'},
        ]
    },
    {
        title: 'feedback',
        extra: 'components',
        children: [
            {title: 'loading'},
        ]
    },

]

export default itemList
