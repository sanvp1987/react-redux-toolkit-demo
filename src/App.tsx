
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment,decrement } from './redux/slices/counter'
import MyComponent from './MyComponent'

function App() {
const count = useAppSelector(state => state.counter)
const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>
        Count is {count}
      </h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
  <MyComponent></MyComponent>
    </>
  )
}

export default App
