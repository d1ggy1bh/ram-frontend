function track({
  event,
  chain,
  data,
  value,
}: {
  event: string
  chain: number | undefined | string
  data: any
  value?: number | string
}): void {
  console.log({ event, value, chain, ...data })
  dataLayer?.push({ event, value, chain, ...data })
}

export default track
