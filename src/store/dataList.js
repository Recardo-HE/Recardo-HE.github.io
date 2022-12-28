import { createSlice } from '@reduxjs/toolkit';
export const groupCartSlice = createSlice({
    name: 'data',
    initialState: {
        menu: [
            {
                name: '指标数据提供方信息',
                state: false,
            },
            {
                name: '一级分类信息',
                state: false,
            },
            {
                name: '指标数据提供方',
                state: false,
            },
        ],
        items: [
            {
                label: `指标数据应用管理`,
                key: '1',
            },
            {
                label: `指标数据提供方管理`,
                key: '2',
            },
            {
                label: `接口资料管理`,
                key: '3',
            },
        ],
    },
    reducers: {
        getData: (state, { payload }) => {
            console.log(payload);
        },
        checkMenu: (state, { payload }) => {
            let res = JSON.parse(JSON.stringify(state.menu)) 
            let arr = res.map(el => {
                if (el.name == payload.name) {
                    el.state = true
                } else {
                    el.state = false
                }
                return el
            })
            state.menu = arr
        }
    },
});

export const { getData, checkMenu } = groupCartSlice.actions;

export default groupCartSlice.reducer;