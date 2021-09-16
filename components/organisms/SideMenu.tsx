import React from 'react'
import { List, ListItem, Button } from '@material-ui/core'

export const SideMenu: React.FC = () => {
  return (
    <List>
      <ListItem>
        <Button>Interactive Brokers</Button>
      </ListItem>
      <ListItem>
        <Button>Alpaca</Button>
      </ListItem>
    </List>
  )
}
