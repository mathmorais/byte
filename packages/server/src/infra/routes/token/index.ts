import { Router } from 'express'

const router = Router()

router.get('/verify/:token', (req, res) => {
  const { token } = req.params

  res.send(`${token}`)
})

export default router
