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
        name='index'
        as={NavLink}
        to='/'
      >
        Index
      </Menu.Item>
      <Menu.Item
        name='apibutton'
        as={NavLink}
        to='/apibutton'
      >
        API Button
      </Menu.Item>
      <Menu.Item
        name='apiurl'
        as={NavLink}
        to='/apiurl/1'
      >
        API Url
      </Menu.Item>
    </Menu>
  )
}

export default Header
