import Home from '../views/Home'
import Cate from '../components/Cate'
import Chain from '../components/Chain'
import Manage from '../components/Manage'


const router = [
    { path: '/', element: <Home /> },
    {
        path: '/home', element: <Home />, children: [
            { path: 'chain', element: <Chain /> },
            { path: 'manage', element: <Manage /> },
            { path: 'cate', element: <Cate /> },
        ]
    },

]

export default router