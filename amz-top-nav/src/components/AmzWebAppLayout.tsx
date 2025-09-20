import { ReactElement, createElement } from 'react'

export type AmzWebAppLayoutProps = {
  sampleText?: string
}

export default function AmzWebAppLayout(props: AmzWebAppLayoutProps): ReactElement {
  console.info(props.sampleText)
  return <div className='widget-hello-world'>Hello world</div>
}
