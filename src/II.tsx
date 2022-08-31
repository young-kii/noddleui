import useT from "./useT";
import {useEffect} from "react";

export default () => {
    const a = useT()
    console.log(a()?.dataset)
    return (
        <div>
            {a()?.dataset.lan}
        </div>
    )
}