import Home from '../views/Home'
import Chain from '../components/Chain'
import Manage from '../components/Manage'

const router = [
    { path: '/', element: <Home /> },
    {
        path: '/home', element: <Home />, children: [
            { path: 'chain', element: <Chain /> },
            { path: 'manage', element: <Manage /> },
        ]
    },
]

export default router