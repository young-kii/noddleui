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

let code = `import React from 'react';
import { Button, Space } from 'tdesign-react';

export default function ButtonExample() {
    const a = {
        name: {
            age: 18
        }
    }
  return 
    <Space direction="vertical">
      <Space>
        <Button variant="outline" ghost>
          幽灵按钮
        </Button>
        <Button variant="dashed" ghost>
          幽灵按钮
        </Button>
        <Button variant="text" ghost>
          幽灵按钮
        </Button>
      </Space>
      <Space>
        <Button variant="outline" theme="primary" ghost>
          幽灵按钮
        </Button>
        <Button variant="dashed" theme="primary" ghost>
          幽灵按钮
        </Button>
        <Button variant="text" theme="primary" ghost>
          幽灵按钮
        </Button>
      </Space>
      <Space>
        <Button variant="outline" theme="success" ghost>
          幽灵按钮
        </Button>
        <Button variant="dashed" theme="success" ghost>
          幽灵按钮
        </Button>
        <Button variant="text" theme="success" ghost>
          幽灵按钮
        </Button>
      </Space>
      <Space>
        <Button variant="outline" theme="warning" ghost>
          幽灵按钮
        </Button>
        <Button variant="dashed" theme="warning" ghost>
          幽灵按钮
        </Button>
        <Button variant="text" theme="warning" ghost>
          幽灵按钮
        </Button>
      </Space>
      <Space>
        <Button variant="outline" theme="danger" ghost>
          幽灵按钮
        </Button>
        <Button variant="dashed" theme="danger" ghost>
          幽灵按钮
        </Button>
        <Button variant="text" theme="danger" ghost>
          幽灵按钮
        </Button>
      </Space>
    </Space>
  );
}
`

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
                title={'Button 按钮'}
                description={'按钮用于链接用户点击的操作，例如“取消”，“确认”，“提交”等。'}
            />
            <ContentContent>
                <ContentItem id={'basic-button'} label={'基础按钮'} paddingTop={64}>
                    <>
                        <h3>基础按钮</h3>
                        <p>基础按钮包括填充按钮、描边按钮、虚框按钮和文字按钮。</p>
                        <h4>填充按钮</h4>
                        <p>一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。</p>
                        <h4>描边按钮</h4>
                        <p>描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。</p>
                        <h4>虚框按钮</h4>
                        <p>按钮边框线为虚线，常用于表单中的添加配置项。</p>
                        <h4>文字按钮</h4>
                        <p>直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁。</p>
                    </>
                </ContentItem>
                <CodeBox code={code}>
                    <Space>
                        <Button>填充按钮</Button>
                        <Button border={"solid"}>描边按钮</Button>
                        <Button border={"dashed"}>虚框按钮</Button>
                        <Button border={"text"}>文字按钮</Button>
                    </Space>
                </CodeBox>
                <ContentItem id={'basic-button2'} label={'图标按钮'} paddingTop={64}>
                    <>
                        <h3>基础按钮</h3>
                        <p>基础按钮包括填充按钮、描边按钮、虚框按钮和文字按钮。</p>
                        <h4>填充按钮</h4>
                        <p>一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。</p>
                        <h4>描边按钮</h4>
                        <p>描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。</p>
                        <h4>虚框按钮</h4>
                        <p>按钮边框线为虚线，常用于表单中的添加配置项。</p>
                        <h4>文字按钮</h4>
                        <p>直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁。</p>
                    </>
                </ContentItem>
                <ContentItem id={'change-color'} label={'改变颜色'} paddingTop={64}>
                    <>
                        <h3>改变颜色</h3>
                        <p>初始主题颜色有以下几种：浅灰色、蓝色、红色、黄色、绿色。</p>
                    </>
                </ContentItem>
                <CodeBox code={'nothing here, you f**king idiot'}>
                    <Space direction={"vertical"}>
                        <Space>
                            <Button>填充按钮</Button>
                            <Button border={"solid"}>描边按钮</Button>
                            <Button border={"dashed"}>虚框按钮</Button>
                            <Button border={"text"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"success"}>填充按钮</Button>
                            <Button type={"success"} border={"solid"}>描边按钮</Button>
                            <Button type={"success"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"success"} border={"text"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"danger"}>填充按钮</Button>
                            <Button type={"danger"} border={"solid"}>描边按钮</Button>
                            <Button type={"danger"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"danger"} border={"text"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"warning"}>填充按钮</Button>
                            <Button type={"warning"} border={"solid"}>描边按钮</Button>
                            <Button type={"warning"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"warning"} border={"text"}>文字按钮</Button>
                        </Space>
                        <Space>
                            <Button type={"primary"}>填充按钮</Button>
                            <Button type={"primary"} border={"solid"}>描边按钮</Button>
                            <Button type={"primary"} border={"dashed"}>虚框按钮</Button>
                            <Button type={"primary"} border={"text"}>文字按钮</Button>
                        </Space>

                    </Space>
                </CodeBox>
                <div className={STYLE.blocks}></div>
                <div className={STYLE.blocks}></div>
                <div className={STYLE.blocks}></div>
                <div className={STYLE.blocks}></div>
            </ContentContent>

        </div>
    )
}


