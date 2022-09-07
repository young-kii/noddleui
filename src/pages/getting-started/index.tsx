import STYLE from './index.module.less'
import Select, {Option} from "../../noddle-components/select";
import Input from "@/noddle-components/input";
export default () => {

    return (
        <div>
            getting-started
            <Select value={'123'} onChange={(value)=>console.log('数字选项onchange',value)} >
                <Option value={'1234'}>456</Option>
                <Option value={'123'}>1321</Option>
            </Select>
        </div>
    )
}