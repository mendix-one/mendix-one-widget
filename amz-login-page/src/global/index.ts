import createNanoEvents from 'nanoevents/index.js'

const pluginExternalEventBus = 'one.mendix.widgets.web.eventsbus' as const

export type AmzPayload =
  | { [key: string]: number | string | boolean | Date | number[] | string[] | boolean[] | Date[] | AmzPayload[] }
  | undefined

export type AmzEvent = {
  type: string
  payload: AmzPayload
}

export type ExternalEventBus = {
  emit(channel: string, event: AmzEvent): void
  listen(channel: string, callback: (event: AmzEvent) => void): () => void
}

declare global {
  interface Window {
    [pluginExternalEventBus]?: ExternalEventBus
  }
}

class AmzExternalEventBus implements ExternalEventBus {
  nanoEventsBus: any

  constructor() {
    this.nanoEventsBus = createNanoEvents<AmzEvent>()
  }

  emit(channel: string, event: AmzEvent): void {
    this.nanoEventsBus.emit(channel, event)
  }

  listen(channel: string, callback: (event: AmzEvent) => void): () => void {
    return this.nanoEventsBus.on(channel, callback)
  }
}

const setup = (): ExternalEventBus => {
  if (Object.prototype.hasOwnProperty.call(window, pluginExternalEventBus)) {
    throw new Error('Widget events bus: plugin already initialized!')
  }

  return new AmzExternalEventBus()
}

const init = (): ExternalEventBus => {
  return (window[pluginExternalEventBus] ??= setup())
}

const destroy = (): void => {
  delete window[pluginExternalEventBus]
}

const subscribe = (channel: string, listener: (event: AmzEvent) => void): (() => void) => {
  const myEventBus = init()
  return myEventBus.listen(channel, listener)
}

const publish = (channel: string, event: AmzEvent): void => {
  const myEventBus = init()
  return myEventBus.emit(channel, event)
}

export default { init, subscribe, publish, destroy }
