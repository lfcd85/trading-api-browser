import React from 'react'
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import Link from 'next/link'
import { Broker } from '~/types'

export const SideMenu: React.FC = () => {
  const [open, setOpen] = React.useState<{
    [broker in Broker]?: boolean
  }>({})

  const handleClick = (broker: Broker) => {
    setOpen({ ...open, [broker]: !open[broker] })
  }

  const interactiveBrokersWebAPIServerURL =
    process.env.NEXT_PUBLIC_INTERACTIVE_BROKERS_WEB_API_SERVER_URL

  return (
    <Paper elevation={0} className="w-60 h-full border-r fixed">
      <List>
        <ListItem button onClick={() => handleClick('interactiveBrokers')}>
          <ListItemText>Interactive Brokers</ListItemText>
        </ListItem>
        <Collapse in={open.interactiveBrokers}>
          <List disablePadding>
            <a
              href={interactiveBrokersWebAPIServerURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItem button className="pl-8">
                Login
              </ListItem>
            </a>
            <Link href="/ibkr/accounts">
              <a>
                <ListItem button className="pl-8">
                  Accounts
                </ListItem>
              </a>
            </Link>
            <Link href="/ibkr/positions">
              <a>
                <ListItem button className="pl-8">
                  Positions
                </ListItem>
              </a>
            </Link>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('alpaca')}>
          <ListItemText>Alpaca</ListItemText>
        </ListItem>
        <Collapse in={open.alpaca}>
          <List disablePadding>
            <Link href="/alpaca/account">
              <a>
                <ListItem button className="pl-8">
                  Account
                </ListItem>
              </a>
            </Link>
            <Link href="/alpaca/positions">
              <a>
                <ListItem button className="pl-8">
                  Positions
                </ListItem>
              </a>
            </Link>
          </List>
        </Collapse>
      </List>
    </Paper>
  )
}
