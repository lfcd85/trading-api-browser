interface UseAlphaVantageApi {
  fetchAlphaVantageApi: (params?: object) => Promise<Response>
}

export const useAlphaVantageApi = (): UseAlphaVantageApi => {
  const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY as string
  const basePath = 'https://www.alphavantage.co/query'

  const fetchAlphaVantageApi = (params: object = {}) => {
    const url = new URL(basePath)
    url.search = new URLSearchParams({
      ...params,
      apikey: apiKey,
    }).toString()

    return fetch(url.toString())
  }

  return { fetchAlphaVantageApi }
}
