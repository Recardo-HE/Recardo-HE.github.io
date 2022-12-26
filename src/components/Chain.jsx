import React, { useEffect } from 'react'
import { Button, Layout, } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom';
import '../static/css/Chain.css'

const { Content } = Layout;
function Chain() {

    // 设置旋转
    function getSpin() {
        const items = document.querySelectorAll('.container .item');
        const r = document.querySelector('.container').clientWidth / 2;
        const count = items.length;
        const pieceDeg = 360 / count;
        for (let i = 0; i < count; i++) {
            let t = i * pieceDeg;
            t = (Math.PI / 180) * t;
            const x = Math.sin(t) * r
            const y = -Math.cos(t) * r;
            items[i].style.transform = `translate(${x}px, ${y}px)`
        }
    }

    useEffect(() => {
        getSpin()
    }, [])

    return (
        <>
            <Content className='main'>
                <div className='box_left'>
                    <div className='box_content'>

                    </div>
                    <div className='box_title'>
                        <h3>指标提供方</h3>
                    </div>
                </div>
                <div className='center'>
                    <div className='container'>
                        <div className='item' >
                            <img src={require("../static/images/按摩.jpg")} alt="" />
                        </div>
                        <div className='item' key='2'>
                            <img src={require("../static/images/瞅啥.jpg")} alt="" />
                        </div>
                        <div className='item' key='3'>
                            <img src={require("../static/images/臭虾.jpg")} alt="" />
                        </div>
                        <div className='item' key='4'>
                            <img src={require("../static/images/出家.jpg")} alt="" />
                        </div>
                        <div className='item' key='5'>
                            <img src={require("../static/images/蒙娜丽莎.jpg")} alt="" />
                        </div>
                        <div className='item' key='6'>
                            <img src={require("../static/images/轩.jpg")} alt="" />
                        </div>
                    </div>
                </div>
                <div className='box_right'>
                    <div className='box_content'>
                        
                    </div>
                    <div className='box_title'>
                        <h3>指标应用方</h3>
                    </div>
                </div>
            </Content>

        </>
    )
}

export default Chain