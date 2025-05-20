
import { defineUserConfig } from 'vitepress-export-pdf'

export default defineUserConfig({
  // Output filename
  outFile: 'api-example.pdf',
  // Output dir
  outDir: 'pdf-vitepress',
  // Regular expression to specify only file to print and remove the others
  routePatterns:['!/**','!/*','/api-examples.html'], 
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      bottom: 60,
      left: 25,
      right: 25,
      top: 60,
    },
  },
  urlOrigin: '',
})