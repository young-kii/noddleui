export default {
    nav: {
        '': '开始',
        getting_started: '快速开始',
        changelog: '更新日志',
        overview: '组件概览',
    },
    config: {
        '': '全局配置',
        globalConfig: '全局特性配置',
    },
    general: {
        '': '基础',
        button: 'Button 按钮',
        text: 'Text 文本'
    },
    layout: {
        '': '布局',
        space: 'Space 间距',
        divider: 'Divider 分割线'
    },
    dataEntry: {
        '': '输入',
        select: 'Select 选择器',
        form: 'Form 表单'
    },
    dataDisplay: {
        '': '数据展示',
        table: 'Table 表格'
    },
    feedback: {
        '': '反馈',
        loading: 'Loading 加载中'
    }
}

// const aa = {
//     nav: {
//         start: '开始',
//         getting_started: '快速开始',
//         changelog: '更新日志',
//         overview: '组件概览',
//     },
//     config: {
//         config: '全局配置',
//         globalConfig: '全局特性配置',
//     },
//     dataEntry: {
//         dataEntry: '输入',
//         select: {
//             a: {
//                 b:'123'
//             },
//             c: {
//                 d:'1234'
//             }
//         }
//     }
// } as const
// let index = 0
//
// const arr: { key: keyof aa}[] = []
// function getKeys(obj: { [x: string]: any },result:string = '') {
//         let origin = result
//         for(let key in obj) {
//
//             result += (result ? '.' : '') + key
//             // console.log('key:',key)
//             if(typeof obj[key] === "object")
//                 getKeys(obj[key],origin + (origin ? '.' : '') + key)
//             else {
//                 let a = {
//                     key:result
//                 }
//                 arr.push(a)
//                 result = origin
//             }
//         }
// }
//
// getKeys(aa)
// console.log(arr)
