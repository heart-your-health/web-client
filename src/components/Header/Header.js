
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { styles } from './HeaderStyles.js'


const mapStateToProps = (state, ownProps) => {
  const connections = state.connections || [ {
    title:'Heart Rate', 
    details:{
      average: 66
    }
  }, { 
    type: 'Height & Weight',
    details:{
      average: 146
    }
  }, { 
    type: 'Blood Metrics',
    details:{
      average: 82
    }
  }]
  return {
    connections
  } 
}


const mapDispatchToProps = (state, ownProps) => {
  const connections = state.connections || [ 'fitbit', 'iHealth', 'Manual']
  return {
    connections
  } 
}


const Header = ({
  title,
  classes
}) =>
<div className={classes.root}>
  <AppBar position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
        Hearth Your Health
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
</div>


Header.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object
}


export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(Header))
