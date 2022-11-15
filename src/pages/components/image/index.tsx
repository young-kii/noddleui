import Image from "@/noddle-components/image";
import {useState} from "react";

export default () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <div style={{padding: 20}}>
                <Image width={100}
                       height={100}
                       preview={{
                           src: 'https://tdesign.gtimg.com/demo/demo-image-3.png',
                           visible,
                           onVisibleChange: (visible) => {
                               setVisible(visible)
                           }
                       }}
                       src={'https://tdesign.gtimg.com/demo/demo-image-2.png'}
                       onClick={() => setVisible(true)}
                />
                Image
            </div>
        </>

    )
}


