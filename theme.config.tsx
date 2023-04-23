import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DeepShifter</span>,
  project: {
    link: 'https://github.com/deepshifter',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/deepshifter',
  footer: {
    text: 'DeepShifter Crypto and AI Research Company',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – DeepShifter'
    }
  },
}

export default config
