import { BrowserWindow, Menu, Tray } from 'electron'
import path from 'node:path'

import { IPC } from '@shared/constants/ipc'

export const createTray = (window: BrowserWindow) => {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    {
      label: 'Rotion',
      enabled: false,
    },
    {
      type: 'separator',
    },
    {
      label: 'Create new page',
      click: () => {
        window.webContents.send(IPC.DOCUMENTS.NEW_DOCUMENT_REQUEST)
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Recent documents',
      enabled: false,
    },
    {
      label: 'Document 1',
      click: () => {
        console.log('Open document 1')
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Quit',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
