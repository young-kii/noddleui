import {badgeProps} from "@/noddle-components/badge/types";
import STYLE from './index.module.less';
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {CSSProperties, useEffect, useState} from "react";

export default (props: badgeProps) => {
    const {children, count, overflowCount} = props
    const [count_array, setCountArray] = useState(String(count).split(''))
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container: true
    })
    const class_badge_count = styles({
        badge_count: true
    })
    const class_scroll = styles({
        scroll: true
    })
    const renderOverflow = () => {
        const array = String(getOverflowCount()).split('')
        return <>
            {
                array.map((item, index) => {
                    return <div key={index} className={STYLE.numbers}>
                        <div className={STYLE.number}>{item}</div>
                    </div>
                })
            }
            <div className={STYLE.numbers}>
                <div className={STYLE.number}>+</div>
            </div>
        </>
    }
    const renderNumbers = () => {
        return count_array.map((item, index) => {
            return <div className={STYLE.numbers} style={{transform: `translateY(-${18 * Number(item)}px)`}}
                        key={index}>
                {
                    Array.from({length: 10}).map((item, index) => {
                        return index
                    }).map((item, index) => {
                        return <div className={STYLE.number} key={index}>{item}</div>
                    })
                }
            </div>
        })
    }
    const getOverflowCount = () => {
        if (typeof overflowCount === "number")
        {
            if(overflowCount <= 0)
                return -1
            return overflowCount
        }
        return -1
    }
    useEffect(() => {
        setCountArray(String(count).split(''))
    }, [count])
    return (
        <div className={class_container}>
            {children}
            {
                (count === 0 || count && count >= 0) &&
                <div className={class_badge_count}>
                    <div className={class_scroll}>
                        {
                            count && getOverflowCount() !== -1 && count > getOverflowCount() ? renderOverflow() : renderNumbers()
                        }
                    </div>
                </div>
            }

        </div>
    )
}

