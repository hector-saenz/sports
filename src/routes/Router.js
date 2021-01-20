import NotFound from '../pages/NotFound'
import GetPathInfo from '../utils/GetPathInfo'

function Router(routes) {
    const { path } = GetPathInfo()
    const route = routes[path] ? routes[path] : NotFound
    if(routes[path]) {
        history.pushState({}, '', path)
    }

    return route
} 

export default Router