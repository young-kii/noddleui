import STYLE from './index.module.less'
import Something from "@/pages/404/something";
export default () => {
    return (
        <div className={STYLE.container}>
            <pre>
                4 0 4   Not   Found
                <Something render={(menu) => menu > 3 ? 'yes' : 'no'} value={['1','2','4','7']} />
            </pre>
        </div>
    )
}