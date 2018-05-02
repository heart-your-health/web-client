import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './ContainerStyles'

const Container = ({ classes, children }) =>
<section className={classes.container}>
  { children }
</section>

Container.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
}

export default withStyles(styles)(Container)


