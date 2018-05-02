import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiCard, { CardActions, CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
// import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChartIcon from '@material-ui/icons/InsertChart'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { styles } from './CartStyles'
import { toggleCardView, initializeCard } from './CardActions'


const mapStateToProps = ({ 
  Cards=[] 
}, ownProps) => ({
    ...Cards.find(card=>card.cardId === ownProps.id) || {}
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initializeCard: () => dispatch(initializeCard(ownProps.id)),
    toggleCardView: id => dispatch(toggleCardView(id))
  }
}

class Card extends Component { 
  constructor(props) {
    super()
  }

  componentDidMount(){
    this.props.initializeCard()
  }

  render() { 
    const {
      id,
      classes,
      title,
      content,
      toggleCardView,
      isFlipped,
    } = this.props 

    return (
      <div>
      <MuiCard className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={ title }
          subheader={ content.lastUpdated ? `updated on ${content.lastUpdated}` : null }
        />
        <CardContent>
          <Typography className={classes.content} component="div">
            { isFlipped ? <ChartIcon style={{ fontSize: 219 }}/>  : content.average}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button color="secondary" size="small">Learn More</Button>
          <Button variant="raised" color="primary" size="small">Continue</Button> */}
          <IconButton onClick={()=>toggleCardView(id)}>
            { isFlipped ? <ArrowBack /> : <ChartIcon /> }
          </IconButton>
        </CardActions>
      </MuiCard>
    </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.object,
  toggleCardView: PropTypes.func,
  isFlipped: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Card))