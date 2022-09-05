import STYLE from './index.module.less'
export default () => {
    return (
        <div>
            <Select/>
        </div>
    )
}

const Select = () => {
    return (
        <div className={STYLE.container}>选择器</div>
    )
}