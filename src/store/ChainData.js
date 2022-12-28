import { createSlice } from '@reduxjs/toolkit';
export const groupCartSlice = createSlice({
    name: 'chainData',
    initialState: {
        datalist: [
            {
                name: '存量业务',
                state:false,
            },
            {
                name: '10086服务',
                state:false,
            },
            {
                name: '智能导航',
                state:false,
            },
            {
                name: '12580话务',
                state:false,
            },
            {
                name: '互联网话务',
                state:false,
            },
            {
                name: '86热线',
                state:false,
            },
        ],
    },
    reducers: {
        getData: (state, { payload }) => {
            console.log(payload);
        },
        checkData: (state, { payload }) => {
            let res = JSON.parse(JSON.stringify(state.datalist)) 
            let arr = res.map(el => {
                if (el.name == payload.name) {
                    el.state = !el.state
                } else {
                    el.state = false
                }
                return el
            })
            state.datalist = arr
        }
    },
});

export const { getData,checkData } = groupCartSlice.actions;

export default groupCartSlice.reducer;