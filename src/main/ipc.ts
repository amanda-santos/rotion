import { ipcMain } from 'electron'

ipcMain.on('fetch-documents', (event, params) => {
  console.log(params)
})
