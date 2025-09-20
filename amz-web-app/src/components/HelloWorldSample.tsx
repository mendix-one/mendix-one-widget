export interface HelloWorldSampleProps {
  sampleText?: string
}

export function HelloWorldSample({ sampleText }: HelloWorldSampleProps) {
  return <div className='widget-hello-world'>Hello {sampleText}</div>
}
