import 'react-redux'
import { RootState } from '@store/index'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
