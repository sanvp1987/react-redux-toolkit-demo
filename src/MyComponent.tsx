
import { useAppSelector } from './redux/hooks'

const MyComponent = () => {
    const count = useAppSelector(s=> s.counter)
  return (
    <div>MyComponent Count : {count}</div>
  )
}

export default MyComponent