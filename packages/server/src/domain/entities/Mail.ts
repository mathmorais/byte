export class Mail {
  from!: string
  to!: string
  subject!: string
  html?: string
  constructor(props: Mail) {
    Object.assign(this, props)
  }
}
