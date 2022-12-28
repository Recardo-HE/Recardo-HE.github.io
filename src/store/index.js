import { configureStore } from '@reduxjs/toolkit';
import dataList from './dataList'
import ChainData from './ChainData'

export default configureStore({
  reducer: {
    data:dataList,
    chainData:ChainData
  },
});