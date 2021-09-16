import React from 'react'
import { Paper, List, ListItem, Button } from '@material-ui/core'

export const SideMenu: React.FC = () => {
  return (
    <Paper elevation={0} className="w-60 h-full border-r fixed">
      <List>
        <ListItem>
          <Button>Interactive Brokers</Button>
        </ListItem>
        <ListItem>
          <Button>Alpaca</Button>
        </ListItem>
      </List>
    </Paper>
  )
}
