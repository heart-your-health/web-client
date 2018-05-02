import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import DashboardContainer from './Dashboard/DashboardContainer'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { hyhTheme } from './HeartYourHealthTheme'

const theme = createMuiTheme(hyhTheme)

class HeartYourHealth extends Component { 
  constructor(props) {
    super()
  }

  render() { 
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <DashboardContainer />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default HeartYourHealth
