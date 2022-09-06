import STYLE from './index.module.less'
import Select, {Option} from "../../noddle-components/select";
export default () => {

    return (
        <div>
            getting-started
            <Select initValue={''} value={''}>
                {/*<div onClick={()=>{}} selected={true} value={123}>123</div>*/}
                {/*<Option onClick={()=>{}} selected={true} value={123}>456</Option>*/}
                <Option value={123}>1321</Option>
            </Select>

        </div>
    )
}