import STYLE from './index.module.less'
import ContentHeader from "@/components/content-header";
import Select, {Option} from "@/noddle-components/select";
import Content from "@/layout/content";
import ContentContent from "@/components/content-content";
import ContentItem from "@/components/content-item";
import CodeBox from "@/noddle-components/codeBox";
import {MutableRefObject, useEffect, useRef} from "react";
import Button from "@/noddle-components/button";
import Space from "@/noddle-components/space";
import Table from "@/noddle-components/table";

export default () => {

    const tabsConfig = {
        tabs: [
            {tab: 'demo', label: '示例'},
            {tab: 'api', label: 'API'},
            {tab: 'preview', label: '预览'},
        ]
    }
    return (
        <div>
            <ContentHeader
                tabsConfig={tabsConfig}
                title={'Table 表格'}
                description={'表格啊啊啊啊啊'}
            />
            <ContentContent>
                <ContentItem id={'demo22'} label={'ok'} paddingTop={64}>
                    <Table/>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                </ContentItem>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <div>sasdsa</div>
                <ContentItem id={'demo233'} label={'ok1'} paddingTop={64}>
                    <Table/>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                    <div>12312</div>
                </ContentItem>
            </ContentContent>


        </div>
    )
}


