import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

    constructor(){
      super()
      this.state = {
        activatedButton: ""
      }
    }




  handleClick = (event) => {
    event.persist()
    // console.log(event.target.id)
    this.setState({
      activatedButton: event.target.id
    })
    }
  




  render() {
   
    

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {this.state.activatedButton === 'profile'? <Profile /> : null}
        {this.state.activatedButton === 'photo'? <Photos /> : null}
        {this.state.activatedButton === 'cocktail'? <Cocktails /> : null}
        {this.state.activatedButton === 'pokemon'? <Pokemon /> : null}
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
