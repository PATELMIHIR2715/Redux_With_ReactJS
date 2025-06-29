
import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <h2>Todo List Using Redux</h2>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
