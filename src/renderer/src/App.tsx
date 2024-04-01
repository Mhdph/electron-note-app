import { ActionButtonsRow } from './components/ActionButtonsRow'
import { Content, RootLayout, Sidebar } from './components/AppLayout'
import { DraggableTopBar } from './components/DraggableTopBar'
import { MarkdownEditor } from './components/MarkdownEditor'
import { NotePreviewList } from './components/NotePreviewList'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout className="bg-black bg-opacity-10">
        <Sidebar className="p-2   ">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList />
        </Sidebar>
        <Content className=" bg-black bg-zing-900/50 border-l border-l-white/20">
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
