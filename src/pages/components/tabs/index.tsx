import STYLE from './index.module.less'
import Tabs from "@/noddle-components/tabs";
import Space from "@/noddle-components/space";
import Button from "@/noddle-components/button";

export default () => {

    return (
        <>
            <div style={{height: 400, width: '100%', padding: 24}}>
                tabs
                <Tabs type={"card"} outlined items={[
                    {
                        children: 'hild 1child 1child 1child 1child 1child 1child 1child 1child 1child 1',
                        closable: false,
                        key: 1,
                        label: "Tab 1"
                    },
                    {
                        children: <Space direction={"vertical"}>
                            <Button>打开</Button>
                            <Button>打开</Button>
                            <Button>打开</Button>
                            <Button>打开</Button>
                        </Space>, closable: false, key: 2, label: "Tab 2"
                    },
                    {children: 'child 3', closable: false, key: 3, label: "Tab 3"},
                ]}/>
            </div>
            <div style={{height: 400, width: '100%', padding: 24}}>
                <Tabs outlined items={[
                    {children: 'child 1', key: 0, label: 'tab 1'},
                    {children: 'child 1', key: 1, label: 'tab 1'},
                    {children: 'child 1', key: 2, label: 'tab 1'},
                ]}/>

            </div>
        </>
    )
}