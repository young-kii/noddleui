import STYLE from './index.module.less'
import Button from "@/noddle-components/button";
import message from "@/noddle-components/message";

export default () => {
    const handleClick = () => {
        message.info({
            content: "王新王新昊王新昊王新昊王新昊王新昊王新昊王新昊王新昊王新昊王新昊王新昊王新昊王新昊昊昊王新昊王新昊王新昊王新昊昊", duration: 4000
        })
    }
    const handleClick2 = () => {
        message.warning({
            content: "王新昊", duration: 2000
        })
    }
    const handleClick3 = () => {
        message.error('一条错误信息❌')
    }
    const handleClick4 = () => {
        message.success('你在干嘛')
    }
    return (
        <>
            <Button onClick={handleClick}>打开消息</Button>
            <Button onClick={handleClick2}>打开消息</Button>
            <Button onClick={handleClick3}>打开消息</Button>
            <Button onClick={handleClick4}>打开消息</Button>
        </>
    )
}