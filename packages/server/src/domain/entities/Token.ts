export class Token {
  id!: string
  admin!: boolean

  constructor(props: Token) {
    Object.assign(this, props)
  }
}
