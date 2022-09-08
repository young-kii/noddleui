import STYLE from './index.module.less'
import ContentHeader from "@/components/content-header";
import Select, {Option} from "@/noddle-components/select";

export default () => {
    const handleChange = (value: any) => {
        console.log(value)
    }
    const tabsConfig = {
        tabs: [
            {tab: 'demo', label: '示例'},
            {tab: 'api', label: 'API'},
            {tab: 'design', label: '指南'}
        ],
        selected: 'demo',
        onChange:handleChange
    }

    return (
        <div>
            <ContentHeader
                tabsConfig={tabsConfig}
                title={'Button 按钮'}
                description={'按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。'}
                img={"https://iconfont.alicdn.com/p/illus_3d/file/NdzEShoF8VBW/a0e793fe-25c7-4307-9603-90b3dc4212ce.png"}/>

            <div className={STYLE.blocks}></div>
            <Select value={'gu'} onChange={(value)=>console.log(value)}>
                <Option value={'wang'}>王新昊</Option>
                <Option value={'gu'}>顾逸轩</Option>
            </Select>


            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
        </div>
    )
}


