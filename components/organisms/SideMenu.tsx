import React from 'react'
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import { Broker } from '~/types'

export const SideMenu: React.FC = () => {
  const [open, setOpen] = React.useState<{
    [broker in Broker]?: boolean
  }>({})

  const handleClick = (broker: Broker) => {
    setOpen({ ...open, [broker]: !open[broker] })
  }

  return (
    <Paper elevation={0} className="w-60 h-full border-r fixed">
      <List>
        <ListItem button onClick={() => handleClick('interactiveBrokers')}>
          <ListItemText>Interactive Brokers</ListItemText>
        </ListItem>
        <Collapse in={open.interactiveBrokers}>
          <List disablePadding>
            <a
              href="https://localhost:5000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItem button className="pl-8">
                Login
              </ListItem>
            </a>
            <ListItem button className="pl-8">
              Account
            </ListItem>
            <ListItem button className="pl-8">
              Market
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('alpaca')}>
          <ListItemText>Alpaca</ListItemText>
        </ListItem>
        <Collapse in={open.alpaca}>
          <List disablePadding>
            <ListItem button className="pl-8">
              Account
            </ListItem>
            <ListItem button className="pl-8">
              Market
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Paper>
  )
}
