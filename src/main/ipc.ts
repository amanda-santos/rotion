import { ipcMain } from 'electron'

import { IPC } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '@shared/types/ipc'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        {
          id: '1',
          title: 'Document 1',
          content: '',
        },
        {
          id: '2',
          title: 'Document 2',
          content: '',
        },
        {
          id: '3',
          title: 'Document 3',
          content: '',
        },
        {
          id: '4',
          title: 'Document 4',
          content: '',
        },
      ],
    }
  },
)
