import Image from "@/noddle-components/image";
import {useState} from "react";

export default () => {
    const [visible, setVisible] = useState(false)
    const src_arr = [
        'https://tdesign.gtimg.com/demo/demo-image-3.png',
        'https://tdesign.gtimg.com/demo/demo-image-2.png',
        'https://tdesign.gtimg.com/demo/demo-image-1.png',

    ]
    return (
        <>
            <div style={{padding: 20}}>
                <Image width={100}
                       height={100}
                       preview={{
                           src: src_arr,
                           visible,
                           onVisibleChange: (visible) => {
                               setVisible(visible)
                           }
                       }}
                       src={'https://tdesign.gtimg.com/demo/demo-image-2.png'}
                       onClick={() => setVisible(true)}
                />
                <Image src={'https://tdesign.gtimg.com/demo/demo-image-2.png'} width={100}
                       height={100} preview={true}/>
                Image
            </div>
        </>

    )
}


