import React from 'react'
import { Menu,MenuItem } from 'semantic-ui-react'

function Categories() {
  return (
    <div>
        <Menu pointing vertical>
        <MenuItem
          name='home'
        />
        <MenuItem
          name='messages'     
        />
        <MenuItem
          name='friends'
        />
      </Menu>
    </div>
  )
}

export default Categories