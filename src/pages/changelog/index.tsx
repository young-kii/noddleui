import { useTranslation } from "@/noddle-components/globalConfig/Config";
import Segment from "../../noddle-components/segment";

export default () => {
    return (
        <div>
            changelog
            <Segment tabs={[{tab:'demo',label:'实例'},{tab:'demo2',label:'实例'}]} selected={"demo"}/>
        </div>
    )
}

const A = () => {
    const translate = useTranslation()
    return (
        <div>{translate('person.young.name')}</div>

    )
}