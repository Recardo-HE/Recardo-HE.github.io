import React, { useState } from 'react'
import { Button, Layout, Tabs } from 'antd'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import * as screen from '../static/js/fullScrien.js'
const { Header, } = Layout;
function Home() {
    const [activeKey, setActiveKey] = useState('1');
    const [items, setItems] = useState([
        {
            key: '/home/chain',
            label: '指标全链路',
        },
        {
            key: '/home/manage',
            label: '指标管理',
        }
    ]);
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    const onChange = (key) => {
        setActiveKey(key);
        navigate(key)
    };
    function getScreen() {
        if (check) {
            screen.exitFullScreen()
            setCheck(false)
        } else {
            screen.enterFullScreen()
            setCheck(true)
        }
    }
    return (
        <>
            <Layout>
                <Header className='header' style={{ backgroundColor: 'white' }}>
                    <Button type="dashed" >
                        首页
                    </Button>
                    <Button type="dashed" >
                        指标管理
                    </Button>
                    <Button
                        type="dashed"
                        icon={check ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                        onClick={getScreen}>
                    </Button>
                    {/* <Tabs items={items}/> */}
                </Header>
                <Outlet />
            </Layout>
        </>
    )
}
export default Home
