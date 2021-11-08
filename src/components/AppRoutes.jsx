import {React, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Users  from '../pages/Users'
import Devices  from '../pages/Devices'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Loader from 'react-loader-spinner'

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(()=>{
    setLoading(false)
  },3000)
  if(loading){
    return <Loader color="#ee6e73" timeout={3000}/>
  }
  return(

    <Switch>
      <Route path='/users' component={Users}/>
      <Route path='/devices' component={Devices}/>
      <Route path='/posts' component={Posts}/>
      <Route path='/' component={Home}/>
    </Switch>
  )
}

export default AppRoutes
