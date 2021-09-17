import {
  restClient,
  IRestClient,
  websocketClient,
  IWebsocketClient,
} from '@polygon.io/client-js'

interface UsePolygonIoApi {
  fetchWithApiKey: (url: string) => Promise<Response>
  polygonIoApi: IRestClient
  polygonIoWebSocket: IWebsocketClient
}

export const usePolygonIoApi = (): UsePolygonIoApi => {
  const apiKey = process.env.NEXT_PUBLIC_POLYGON_IO_API_KEY as string

  const polygonIoApi = restClient(apiKey)
  const polygonIoWebSocket = websocketClient(apiKey)

  const fetchWithApiKey = (url: string) =>
    fetch(url, {
      headers: new Headers({ Authorization: `Bearer ${apiKey}` }),
    })

  return { fetchWithApiKey, polygonIoApi, polygonIoWebSocket }
}
