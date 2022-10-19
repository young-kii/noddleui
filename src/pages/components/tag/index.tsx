import STYLE from './index.module.less'
import Tag from "@/noddle-components/tag";
import Space from "@/noddle-components/space";

export default () => {
    return <>
        tag:
        <Space gap={0}>
            <Tag maxCount={4}/>
        </Space>


    </>
}