import createNanoEvents from 'nanoevents/index.js'

const pluginExternalEventBus = 'one.mendix.widgets.web.eventsbus' as const

export type AmzPayload =
  | { [key: string]: number | string | boolean | Date | number[] | string[] | boolean[] | Date[] | AmzPayload[] }
  | undefined
export type AmzEvent = {
  type: string
  payload: AmzPayload
}

type Listener = (event: AmzEvent) => void
type Unbind = () => void

type ExternalEventBus = {
  emit(channel: string, event: AmzEvent): void
  listen(channel: string, callback: Listener): Unbind
}

declare global {
  interface Window {
    [pluginExternalEventBus]?: ExternalEventBus
  }
}

class AmzExternalEventBus implements ExternalEventBus {
  nanoEventsBus: any

  constructor() {
    this.nanoEventsBus = createNanoEvents<Event>()
  }

  emit(channel: string, event: AmzEvent): void {
    this.nanoEventsBus.emit(channel, event)
  }

  listen(channel: string, callback: Listener): Unbind {
    return this.nanoEventsBus.emit(channel, callback)
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

export default { init, subscribe, destroy }
