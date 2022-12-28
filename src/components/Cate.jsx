import React, { useState } from 'react'
import { Tabs, Divider, List, Typography, Space, Button, Table, Checkbox } from 'antd';
import '../static/css/Cate.scss'
import {getData,checkMenu} from '../store/dataList'
import {useDispatch,useSelector} from 'react-redux'
// import axios from 'axios'

function Cate() {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items)
  const menu = useSelector((state) => state.data.menu)
  
  const onChange = (key) => {
    console.log(key);
  };
  const onCheckList = (obj) => {
    dispatch(checkMenu(obj))
  }


  return (
    <>
      <div className='cate_content'>
        <Tabs
          defaultActiveKey="2"
          onChange={onChange}
          items={items}
        />

      </div>
      <div className='cate_data'>
        <div className='cate_menu'>
          <div className='cate_menu_content'>
            <div className='cate_menu_title'>
              <Divider orientation="left">指标数据提供方管理</Divider>
            </div>
            <List
              size="small"
              bordered
              dataSource={menu}
              renderItem={(item) => <List.Item onClick={()=>onCheckList(item)} className={item.state ? 'cur' : ''}>{item.name}</List.Item>}
            />
          </div>
        </div>
        <div className='cate_table'>
          <div className='cate_menu_content'>
            <div className='cate_menu_title'>
              <div className='table_cur'>
                指标数据提供方信息
              </div>
              <div className='cate_table_title'>
                操作记录
              </div>
            </div>
            <div className='cate_table_content'>
              <table cellPadding='0' cellSpacing='0'>
                <thead>
                  <tr>
                    <td><Checkbox onChange={onChange}></Checkbox></td>
                    <td>序号</td>
                    <td>指标数据提供方名称</td>
                    <td>系统编码</td>
                    <td>业务编码</td>
                    <td>接口方式</td>
                    <td>显示排序</td>
                    <td>操作</td>
                    <td>操作日期</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Checkbox></Checkbox></td>
                    <td>1</td>
                    <td>实时平台</td>
                    <td>ajsnjadsn</td>
                    <td>dskfneked</td>
                    <td>CSF调用</td>
                    <td>1</td>
                    <td>
                      <a href="#" >修改</a>
                    </td>
                    <td>2019-10-11</td>
                  </tr>
                </tbody>
              </table>
              {/* 分页 */}
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cate
