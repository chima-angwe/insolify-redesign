export type StatusService = { id: string; name: string; endpoint: string }

/*
  Each endpoint is a URL that answers 200 when the service is healthy.
  TODO: find them on the live page: open /status, press F12, choose the Network tab,
  click Refresh, and copy the request URL for each service.
*/
export const STATUS_SERVICES: StatusService[] = [
  { id: 'fincore', name: 'Fincore', endpoint: '' },
  { id: 'safi', name: 'Safi', endpoint: '' },
  { id: 'crm', name: 'CRM', endpoint: '' },
  { id: 'settle', name: 'Settle Africa', endpoint: '' },
]

export const REFRESH_MS = 60_000
export const TIMEOUT_MS = 8_000