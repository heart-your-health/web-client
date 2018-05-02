import { combineReducers } from 'redux'
import Dashboard from '../app/Dashboard/DashboardReducers'
import Cards from '../components/Card/CardReducers'

export default combineReducers({
  Dashboard,
  Cards
})
