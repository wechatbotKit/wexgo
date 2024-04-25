import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { invoke } from '@tauri-apps/api/core'

import { onLoginApi } from '../api/index'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }))
  }

  const navigate = useNavigate()

  const onLogin = async () => {
    const { code, data: { items: [{ access_token = '', expires_at = -1 }] = [] } = {} } =
      await onLoginApi({
        username: import.meta.env.VITE_APP_USER,
        password: import.meta.env.VITE_APP_PASSWORD,
      })
    console.log(12334, code, access_token, expires_at)
  }

  return (
    <div className="container">
      <h1 onClick={() => onLogin()}>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noreferrer">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p onClick={() => navigate('/abc')}>
        Click on the Tauri, Vite, and React logos to learn more.
      </p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault()
          greet()
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  )
}

export default App
