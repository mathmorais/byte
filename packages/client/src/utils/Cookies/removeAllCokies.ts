import Cookies from 'js-cookie'

export const removeAllCookies = (): void => {
  try {
    const cookies = Cookies.get()

    return Object.keys(cookies).forEach(cookie => {
      Cookies.remove(cookie)
    })
  } catch (err) {
    throw new Error(err.message)
  }
}
