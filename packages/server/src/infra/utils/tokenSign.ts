import { config } from '@infra/config'
import { sign } from 'jsonwebtoken'

const tokenSign = (payload: object) => {
  if (config.jsonwebtoken.privateKey) {
    const result = sign(
      payload,
      config.jsonwebtoken.privateKey,
      config.jsonwebtoken.config
    )

    return result
  }

  throw new Error("Private key can't be undefined")
}

export { tokenSign }
