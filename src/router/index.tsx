import { Switch, Route } from 'react-router-dom';
import ROUTES from './routes';

const Router = () => {
    return (
        <Switch>
            { ROUTES.map((item:any, index) => {
                const { path, exact, component: Component } = item;
                return <Route
                    key={index}
                    path={path}
                    exact={exact}
                    render={ props => <Component {...props} /> }
                />
            })}
        </Switch>
    )
}

export default Router;
