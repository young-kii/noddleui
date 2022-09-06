import STYLE from './index.module.less'
import Select, {Option} from "../../noddle-components/select";
import Input from "@/noddle-components/input";
export default () => {

    return (
        <div>
            getting-started
            <Select initValue={'12344'} value={''} onChange={(value)=>console.log(value)} >
                <Option value={1234}>456</Option>
                <div>123</div>asdasd
                <Option value={123}>1321</Option>
            </Select>
        </div>
    )
}