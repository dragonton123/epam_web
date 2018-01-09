import App from '../pages/App'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Conference from '../pages/Conference/Conference'
import CreateConference from '../pages/CreateConferencePage/CreateConferencePage'

import { Route, Switch} from 'react-router-dom'


const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'conference', component: Conference },
    { path: 'login', component: Login },
    { path: 'createConference', component: CreateConference },
  ]
}]

// const routes = () => (<Switch>
//   <Route exact path='/' component={ Home } />
//   <Route path='/conference' component={ Conference} />
//   <Route path='/login' component={ Login } />
//   <Route path='/createConference' component={CreateConference} />
// </Switch>)

export default routes
