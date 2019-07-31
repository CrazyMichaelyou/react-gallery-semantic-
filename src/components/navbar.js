import React, { Component } from 'react'
import { Dropdown, Menu, Segment } from 'semantic-ui-react'
import DropDown from './dropDown'

 const nav = class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>  
      <Segment inverted>
        <Menu inverted pointing secondary>
          <DropDown/>
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment></div>
      

    )
  }
}
export default nav