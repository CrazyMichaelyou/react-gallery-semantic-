import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const MenuExampleDropdownItem = () => (
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Automotive</Dropdown.Item>
        <Dropdown.Item>Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
)

export default MenuExampleDropdownItem