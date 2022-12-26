import routerList from './router'
import { useRoutes } from 'react-router-dom'

function App() {
  const router = useRoutes(routerList)
  return (
    <div className="App">
      {router}
    </div>
  );
}
export default App;
