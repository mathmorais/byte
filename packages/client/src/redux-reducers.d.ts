import 'react-redux'
import { reducers } from '@store/index'

type Reducers = typeof reducers

declare module 'react-redux' {
  interface DefaultRootState extends Reducers {}
}
