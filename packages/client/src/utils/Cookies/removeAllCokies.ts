import Cookies from 'js-cookie'

export const removeAllCookies = (): void => {
  try {
    const cookies = Cookies.get()

    Object.keys(cookies).forEach(cookie => {
      Cookies.remove(cookie)
    })
  } catch (err) {
    return err
  }
}
