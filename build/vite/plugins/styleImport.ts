/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) {
    return [];
  }
  const styleImportPlugin =    styleImport({
        resolves: [ElementPlusResolve()],
        libs: [{
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/es/components/${name.substring(3)}/style/css`
          }
        }]
      })
      
  return styleImportPlugin;
}
