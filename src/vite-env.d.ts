/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_USER: string
  readonly VITE_APP_PASSWORD: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
