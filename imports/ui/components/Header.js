import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Menu stackable>
      <Menu.Item>
        <img alt='icon' src='/favicon.png' />
      </Menu.Item>
      <Menu.Item
        exact
        name='home'
        as={NavLink}
        to='/'
      >
        Home
      </Menu.Item>
      <Menu.Item
        name='other'
        as={NavLink}
        to='/other'
      >
        Other
      </Menu.Item>
    </Menu>
  )
}

export default Header
