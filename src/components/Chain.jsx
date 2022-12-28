import React, { useEffect } from 'react'
import { Button, Layout, } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../static/css/Chain.scss'
import { getData, checkData } from '../store/ChainData'


const { Content } = Layout;
function Chain() {
    const data = useSelector((state) => state.chainData.datalist)
    const dispatch = useDispatch()
    const getState = (obj) => {
        dispatch(checkData(obj))
    }

    // 设置旋转
    function getSpin() {
        const items = document.querySelectorAll('.container .item');
        const r = document.querySelector('.container').clientWidth / 2;
        const count = items.length;
        const pieceDeg = 360 / count;
        for (let i = 0; i < count; i++) {
            let t = i * pieceDeg;
            t = (Math.PI / 180) * t;
            const x = Math.sin(t) * r / 100
            const y = -Math.cos(t) * r / 100;
            items[i].style.transform = `translate(${x}rem, ${y}rem)`
        }
    }

    // 屏幕发生改变时 改变中间环形图形 
    window.onresize = getRem
    function getRem() {
        let html = document.querySelector('html')
        let owidth = document.body.clientWidth || document.documentElement.clientWidth
        console.log(owidth);
        if (owidth >= 1400) {
            html.style.fontSize = owidth / 1400 * 100 + 'px'
        } else {
            html.style.fontSize = '100px'
        }
    }
    window.onload = getRem()



    useEffect(() => {
        getSpin()
    }, [])


    return (
        <>
            <div className='main'>
                <div className='box_left'>
                    <div className='content'>
                        <ul className="inner-box">
                            <li>cfs调用</li>
                            <li>csf调用</li>
                            <li>文件推送</li>
                            <li>文件推送</li>
                            <li>文件推送</li>
                            <li>cfx调用</li>
                            <li>elt文件同步</li>
                            <li>elt文件同步</li>
                            <li>文件推送</li>
                            <li>cfx调用</li>
                            <li>elt文件同步</li>
                            <li>elt文件同步</li>
                        </ul>
                    </div>
                </div>
                <div className='center'>
                    <div className='center_left'>
                        <div className='center_title'>
                            <h3> 指标总数 825</h3>
                        </div>
                        <div className='center_content'>
                            <div className='center_text'>
                                <h3>本月新增 13</h3>
                            </div>
                            <div className='center_text'>
                                <h3>环比增减 100%</h3>
                            </div>
                        </div>
                    </div>
                    <div className='container111'>
                        <div className='con_title'>
                            <h3>指标全链路管理</h3>
                        </div>
                        <div className='con_bg_2'>
                            <div className='container'>
                                <div className='con_bg_1'>
                                    <div className='con_bg_3'>
                                        {/* <img src={require('../static/images/按摩.jpg')} alt="" style={{objectFit:'cover',width:'50px',height:'50px'}} /> */}
                                    </div>
                                    {
                                        data.map((el, index) => {
                                            return (
                                                <div className='item' key={el.name}>
                                                    <div className={el.state ? 'img1' : 'img'} onClick={() => { getState(el) }} >

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='center_right'>
                        <div className='center_title'>
                            <h3>对外服务器总量 1348</h3>
                        </div>
                        <div className='center_content'>
                            <div className='center_text'>
                                <h3>本月新增 56</h3>
                            </div>
                            <div className='center_text'>
                                <h3>环比增减 100%</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box_right'>
                    <div className='content'>
                        <div className='box_right_content'>
                            <div className='rightt'>
                                <div className='righttop'>个人仪表</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>85</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>17</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>
                            </div>
                            <div className='rightt'>
                                <div className='righttop'>运营监控</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>827</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>10</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>179</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>融合调度</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>216</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>20</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>中台业务</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>3</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>1</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>1</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>1</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>个人仪表</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>85</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>17</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>班组门户</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>316</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>28</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>运营监控</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>827</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>10</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>179</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>融合调度</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>216</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>20</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>中台业务</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>3</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>1</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>1</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>1</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>个人仪表</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>85</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>17</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>班组门户</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>316</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>5</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>28</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>

                            </div>
                            <div className='rightt'>
                                <div className='righttop'>运营监控</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='rightRight'>
                                        指标总量 &nbsp; <span>827</span>
                                    </div>
                                    <div className='rightRight'>
                                        指标分类总量 &nbsp; <span>10</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>4</span>
                                    </div>
                                    <div className='rightRight'>
                                        一级接口总量 &nbsp; <span>179</span>
                                    </div>
                                </div>
                                <div className='jk'>
                                    接口详情
                                    <br />
                                    <br />
                                    指标详情
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chain