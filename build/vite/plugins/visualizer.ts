import { visualizer } from 'rollup-plugin-visualizer'


export function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  }
  return []
}

function isReportMode(): boolean {
    return process.env.REPORT === 'true'
  }