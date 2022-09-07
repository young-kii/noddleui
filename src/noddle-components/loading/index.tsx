import STYLE from './index.module.less'
import LoadingIcon from "@/noddle-components/icons/loading-icon";

export default () => {
    return (
        <>
            <Loading/>
        </>
    )
}

const Loading = () => {
    return (
        <div className={STYLE.loading_container}>
            <div className={STYLE.icon_container}>
                <LoadingIcon height={20} width={20} spin />
            </div>
            <div className={STYLE.text}>
                <span>加</span>
                <span>载</span>
                <span>中</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    )
}

