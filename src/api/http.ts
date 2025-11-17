import { ofetch } from 'ofetch'

const { VITE_ECWID_BASE_URL, VITE_ECWID_STORE_TOKEN, VITE_ECWID_STORE_ID } =
  import.meta.env

export const http = ofetch.create({
  baseURL: `${VITE_ECWID_BASE_URL}/api/v3/${VITE_ECWID_STORE_ID}`,
  headers: {
    Authorization: `Bearer ${VITE_ECWID_STORE_TOKEN}`,
    Accept: '*/*',
  },
  responseType: 'json',
})
