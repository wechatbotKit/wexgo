import { Command } from '@tauri-apps/plugin-shell';

export const useCore = () => {
  const onCoreInit = async () => {
    const result = await Command.create('exec-sh', ['-c', 'cd ../core && npm run start']).execute();
    console.log(result);
  };

  return { onCoreInit };
};
