import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import { styles } from './DashboardStyles'

const mapStateToProps = (state, ownProps) => {
  const connections = state.connections || [ {
    title:'Heart Rate', 
    details:{
      average: 66,
      lastUpdated: new Date()
    }
  }, { 
    title: 'Weight',
    details:{
      average: 146,
      lastUpdated:new Date()
    }
  }, { 
    title: 'Height',
    details:{
      average: `5'9"`,
      lastUpdated:new Date()
    }
  }, { 
    title: 'Glucose',
    details:{
      average: 4.2,
      lastUpdated:new Date()
    }, 
  }, { 
    title: 'Keytones',
    details:{
      average: 1.5,
      lastUpdated:new Date()
    }, 
  }, { 
    title: 'GKI',
    details:{
      average: 3,
      lastUpdated:new Date()
    }, 
  }]
  return {
    connections
  } 
}


class DashboardContainer extends Component { 
  constructor(props) {
    super()
  }

  renderCards(connection, index) {
    const id = index +1
    return <Grid key={ id }  item xs>
      <Card id={ id } title={ connection.title } content={ connection.details }/>
    </Grid>
  }

  render() { 
    return (
      <div className={styles.root}>
        <Header />
        <Container>
          <Grid container spacing={24}>
            { this.props.connections.map( this.renderCards ) }
          </Grid>
        </Container>
      </div>
    )
  }
}


export default connect(mapStateToProps)(withStyles(styles)(DashboardContainer))
