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
        name='click'
        as={NavLink}
        to='/click'
      >
        Click
      </Menu.Item>
      <Menu.Item
        name='url'
        as={NavLink}
        to='/url/1'
      >
        Url
      </Menu.Item>
    </Menu>
  )
}

export default Header
