import Button from "@/noddle-components/button";
import notification from "@/noddle-components/notification";

export default () => {

    const handleClick = () => {
        notification.success({content:'我发个很长很发个很发个很长很长的发个很长很长的长很长的发个很长很长的长的很长的', title:'标题'})
    }
    return (
        <>
            Notification
            <Button onClick={handleClick}>
                打开通知
            </Button>
        </>
    )
}