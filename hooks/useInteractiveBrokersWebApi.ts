import { PortfolioApi, Configuration } from '~/openapi/ibkrweb/client'

interface UseInteractiveBrokersWebApi {
  portfolioApi: PortfolioApi
}

export const useInteractiveBrokersWebApi = (): UseInteractiveBrokersWebApi => {
  const basePath = `${process.env.NEXT_PUBLIC_INTERACTIVE_BROKERS_WEB_API_SERVER_URL}/v1/api`
  const portfolioApi = new PortfolioApi(new Configuration({ basePath }))

  return { portfolioApi }
}
