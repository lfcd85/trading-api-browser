import { AlpacaClient } from '@master-chief/alpaca'

interface UseAlpacaApi {
  alpacaApi: AlpacaClient
}
  
export const useAlpacaApi = (): UseAlpacaApi => {
  const key = process.env.NEXT_PUBLIC_ALPACA_API_KEY_ID as string
  const secret = process.env.NEXT_PUBLIC_ALPACA_API_SECRET_KEY as string
  const paper = process.env.NEXT_PUBLIC_ALPACA_API_PAPER !== 'false'

  const alpacaApi = new AlpacaClient({
    credentials: {
      key,
      secret,
      paper,
    },
    rate_limit: true
  })

  return { alpacaApi }
}
