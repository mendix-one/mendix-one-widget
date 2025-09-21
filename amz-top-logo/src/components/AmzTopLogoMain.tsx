export type AmzTopLogoMainProps = {
  sampleText?: string
}

export default function AmzTopLogoMain(props: AmzTopLogoMainProps) {
  console.info(props.sampleText)
  return <div className='widget-hello-world'>Hello world</div>
}
