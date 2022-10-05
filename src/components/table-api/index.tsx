import ContentContent from "@/components/content-content";
import ContentItem from "@/components/content-item";
import Table from "@/noddle-components/table";
import {apiTableColumns} from "@/types";
import React from "react";

type tableApiProps = {
    onScroll?: (scrollTop: number) => any
    data: any[]
    label: string
}
export default (props: tableApiProps) => {
    const { data, label} = props
    const sort = (data: any[]) => {
        return data.sort((a, b) => {
            return a.property.localeCompare(b.property)
        })
    }
    return (
        <>
                <ContentItem id={label.split(' ').join('-')} label={label} paddingTop={64}>
                    <>
                        <h3>Button Props</h3>
                        <Table columns={apiTableColumns} rowKey={'property'} dataSource={sort(data)} outline/>
                    </>
                </ContentItem>
        </>
    )
}