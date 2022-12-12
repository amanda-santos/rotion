import { contextBridge, ipcRenderer } from 'electron'

import { IPC } from '@shared/constants/ipc'
import {
  CreateDocumentResponse,
  DeleteDocumentRequest,
  FetchAllDocumentsResponse,
  FetchDocumentRequest,
  FetchDocumentResponse,
  SaveDocumentRequest,
} from '@shared/types/ipc'

declare global {
  export interface Window {
    api: typeof api
  }
}

const api = {
  createDocument(): Promise<CreateDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.CREATE)
  },

  deleteDocument(request: DeleteDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.DELETE, request)
  },

  fetchDocument(request: FetchDocumentRequest): Promise<FetchDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH, request)
  },

  fetchDocuments(): Promise<FetchAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL)
  },

  saveDocument(request: SaveDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.SAVE, request)
  },

  onNewDocumentRequest(callback: () => void) {
    ipcRenderer.on(IPC.DOCUMENTS.NEW_DOCUMENT_REQUEST, callback)

    return () => {
      ipcRenderer.off(IPC.DOCUMENTS.NEW_DOCUMENT_REQUEST, callback)
    }
  },
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
