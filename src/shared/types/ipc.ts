export interface Document {
  id: string
  title: string
  content?: string
}

/**
 * Requests
 */

export interface DeleteDocumentRequest {
  id: Document['id']
}

export interface FetchDocumentRequest {
  id: Document['id']
}

export interface SaveDocumentRequest extends Document {}

/**
 * Responses
 */

export interface CreateDocumentResponse {
  data: Document
}

export interface FetchDocumentResponse {
  data: Document
}

export interface FetchAllDocumentsResponse {
  data: Document[]
}
