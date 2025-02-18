# VitePress PDF Print Template

## Description

This template is designed for use with [VitePress](https://vitepress.vuejs.org/), a static site generator powered by Vite. It provides functionality to customize and print your VitePress pages as PDF documents. Whether you're creating reports, documentation, or any other content, this template offers an easy way to generate PDFs directly from your VitePress site.


## Prerequisites

Before using this template, ensure that you have the following:

- [Node.js](https://nodejs.org/) installed.
- [VitePress](https://vitepress.vuejs.org/) setup.
- [VitePress PDF Plugin](https://github.com/your-repo) (or an alternative printing solution).

## Installation 

1. Clone this repository or copy the template into your VitePress project.
   ```sh
   git clone https://github.com/ariahariah/template_vitepress_print_page.git
   cd template_vitepress_print_page.git
   ```
2. Install all dependencies

   ```sh
     pnpm install
   ```
## How can you use it ?

1. Create a markdown file in repository `docs` in front of the other files already present in aborescence or create des dossiers ou autre le plus important est de respecter les regles défini par vitepress pour le routage et de pouvoir accéder à la page génerer par le markdown par la suite and you can edit this file like you want based on vitepress documentation and Markdown 
## How can you use it?

1. Create a Markdown file in the `docs` directory, alongside the other existing files in the repository, or organize it within folders as needed. The important part is to follow VitePress routing rules to ensure that the generated page is accessible later. You can then edit this file as needed, following the [VitePress documentation](https://vitepress.dev/) and standard Markdown syntax.

2. Once your file is created and you want to print it, navigate to `docs/.vitepress/vitepress-pdf.config.ts` and update the `routePatterns` property in the `defineUserConfig` parameters to include the files you want to print. For more details, refer to the [VitePress PDF Export documentation](https://github.com/condorheroblog/vitepress-export-pdf).

### Example of usage:

Suppose you create a file named `page121.md` inside the `docs` directory. You can access it via `/ariah`, preceded by your base URL. After that, update the `docs/.vitepress/vitepress-pdf.config.ts` file as follows:

```ts
import type { DefaultTheme } from 'vitepress'
import { defineUserConfig } from 'vitepress-export-pdf'

import userConfig from './config'

export default defineUserConfig({
  // Output filename
  outFile: 'api-example.pdf',
  // Output directory
  outDir: 'pdf-vitepress',
  routePatterns: ['!/**', '!/*', '/page121.html'], 
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
```

After configuring the export settings, run the following command to generate the PDF:

```
pnpm run docs:export
```

For more details or specifications, you can visit : 
- [Vitepress documentation](https://vitepress.dev/)
- [Vitepress-export-pdf documentation](https://github.com/condorheroblog/vitepress-export-pdf)