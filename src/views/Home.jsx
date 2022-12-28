import React, { useState } from 'react'
import { Button, Layout, Tabs, Select } from 'antd'
import { FullscreenOutlined, FullscreenExitOutlined, BellOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import * as screen from '../static/js/fullScrien.js'

function Home() {
    const navgiate = useNavigate()

    const onclick = (e) => {
        navgiate(e.target.className)
    }

 


    return (
        <>
            <div className='box'>
                <div className='header'>
                    <div className='box_head'>
                        <div className='head_left'>
                            <div className='head_logo' >
                                <img src={require('../static/images/logo512.png')} alt="" />
                            </div>
                            <div className='head_content'>
                                <div className='head_content_top'>
                                    融合服务运营平台
                                </div>
                                <div className='head_content_bottom'>
                                    运营门户
                                </div>
                            </div>
                        </div>
                        <div className='head_right'>
                            <div className='head_right_icon'>
                                <i><BellOutlined /></i>
                            </div>
                            <div className='head_right_srceen' onClick={() => { screen.enterFullScreen() }}>
                               <div>全屏模式</div> 
                            </div>
                            <div className='head_right_company'>
                                <select name='firm'>
                                    <option value="内蒙古">内蒙古分公司</option>
                                    <option value="青海">青海分公司</option>
                                </select>
                            </div>
                            <div className='head_right_theme'>
                                <select name='theme'>
                                    <option value="dark">深度模式</option>
                                    <option value="light">护眼模式</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='box_tabs'>
                        <div onClick={onclick} className='/home/chain'>
                            首页
                        </div>
                        <div onClick={onclick} className='/home/cate'>
                            指标管理
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default Home
