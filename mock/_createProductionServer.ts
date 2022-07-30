import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.globEager('./**/*.ts')

console.log('modules', modules)
const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('_')) {
    return
  }
  mockModules.push(...(modules[key] as any).default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
