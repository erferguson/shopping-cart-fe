import React from 'react'
import { Switch } from 'react-router-dom'
import './less/index.less'
import WrappedRegistrationForm from './components/register'
import LoginForm from './components/login'
import ResetPasswordForm from './components/ResetPassword/resetPassword'
import SetNewPasswordForm from './components/ResetPassword/setNewPassword'
import CreateStoreForm from './components/createStore/firstView'
import AddLogoForm from './components/createStore/addLogo'
import CreateItem from './components/Products/CreateItem'
import UpdateItem from './components/Products/updateItem'
import PrivateRoute from './components/Auth/PrivateRoute'
import PublicRoute from './components/Auth/PublicRoute'
import Main from './components/inventory'
import UpdateProfile from './components/EditProfile'
import Home from './components/DashboardHome'
import Store from './components/store'
import StripeMain from './components/Stripe'
import Review from './components/review'
import OrderSuccessPage from './components/Stripe/OrderSuccessPage'
import Single from './components/singleProduct/index'
import Support from './components/support'
import SaveCartMain from './components/saveCart'
import Account from './components/SellerAccount/SellerAccount'
import Confirmation from './components/orderConfirmation'

function App () {
  const token = localStorage.getItem('token');
  return (
    <Switch>
      <PublicRoute path='/register' component={WrappedRegistrationForm} />
      <PublicRoute exact path='/' component={token ? Home : LoginForm} />
      <PrivateRoute path='/inventory' component={Main} />
      <PublicRoute path='/resetpassword' component={ResetPasswordForm} />
      <PublicRoute path='/setnewpassword' component={SetNewPasswordForm} />
      <PublicRoute path='/store/:id' component={Store} />
      <PublicRoute path='/cart/:id' component={token ? Confirmation : StripeMain} />
      <PublicRoute path='/review' component={Review} />
      <PublicRoute path='/savecart' component={SaveCartMain} />
      <PrivateRoute path='/createstore' component={CreateStoreForm} />
      <PrivateRoute path='/addlogo' component={AddLogoForm} />
      <PrivateRoute path='/profile' component={UpdateProfile} />
      <PrivateRoute path='/createitem' component={CreateItem} />
      <PrivateRoute path='/dashboard' component={Home} />
      <PrivateRoute path='/updateitem/:id' component={UpdateItem} />
      <PublicRoute path='/product/:id' component={Single} />
      <PublicRoute path='/success' component={OrderSuccessPage} />
      <PublicRoute exact path='/support' component={Support} />
      <PrivateRoute path='/account' component={Account} />
    </Switch>
  )
}

export default App
