import type { Plugin } from 'vite'
import { configCompressPlugin } from './compress'
import { configVisualizerConfig } from './visualizer'

export function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const { VITE_BUILD_COMPRESS , VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv
  const vitePlugins: (Plugin | Plugin[])[] = []
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    )
    // rollup-plugin-visualizer
    vitePlugins.push(configVisualizerConfig())
  }
  return vitePlugins
}
