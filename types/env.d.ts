/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// interface ImportMetaEnv {
//   readonly VITE_APP_TITLE: string
//   readonly VITE_API_BASEPATH: string
//   readonly VITE_BASE_PATH: string
//   readonly VITE_DROP_DEBUGGER: string
//   readonly VITE_DROP_CONSOLE: string
//   readonly VITE_SOURCEMAP: string
//   readonly VITE_OUT_DIR: string
//   readonly VITE_VISUALIZER: boolean
// }

// declare global {
//   interface ImportMeta {
//     readonly env: ImportMetaEnv
//   }
// }

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASEPATH: string
  readonly VITE_BASE_PATH: string
  readonly VITE_DROP_DEBUGGER: string
  readonly VITE_DROP_CONSOLE: string
  readonly VITE_SOURCEMAP: string
  readonly VITE_OUT_DIR: string
  readonly VITE_VISUALIZER: boolean
  readonly VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
