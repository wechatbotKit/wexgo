import { Command } from '@tauri-apps/plugin-shell'

export const useShell = () => {
  const shell = async () => {
    const result = await Command.create('exec-sh', ['-c', 'node -v']).execute()
    console.log(result)
  }

  return { shell }
}
