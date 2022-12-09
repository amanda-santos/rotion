import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { Document as DocumentType } from '@shared/types/ipc'
import { Editor, OnContentUpdateParams } from '../components/Editor'
import { ToC } from '../components/ToC'

export const Document = () => {
  const { id } = useParams<{ id: DocumentType['id'] }>()
  const queryClient = useQueryClient()

  const { data, isFetching: isDocumentLoading } = useQuery(
    ['document', id],
    async () => {
      const response = await window.api.fetchDocument({ id: id! })

      return response.data
    },
  )

  const { mutateAsync: saveDocument } = useMutation(
    async ({ title, content }: OnContentUpdateParams) => {
      await window.api.saveDocument({ id: id!, title, content })
    },
    {
      onSuccess: (_, { title }) => {
        queryClient.setQueryData<DocumentType[]>(['documents'], (documents) => {
          return documents?.map((document) => {
            if (document.id === id) {
              return {
                ...document,
                title,
              }
            } else {
              return document
            }
          })
        })
      },
    },
  )

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`
    } else {
      return ''
    }
  }, [data])

  const handleEditorContentUpdate = ({
    title,
    content,
  }: OnContentUpdateParams) => {
    saveDocument({ title, content })
  }

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold text-xs">
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Node.js</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        {!isDocumentLoading && data && (
          <Editor
            content={initialContent}
            onContentUpdate={handleEditorContentUpdate}
          />
        )}
      </section>
    </main>
  )
}
