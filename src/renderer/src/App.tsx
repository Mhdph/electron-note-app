import { Content, RootLayout, Sidebar } from './components/AppLayout'
import { DraggableTopBar } from './components/DraggableTopBar'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout className="bg-black bg-opacity-10">
        <Sidebar className="p-2   ">SideBar</Sidebar>
        <Content className=" bg-black bg-zing-900/50 border-l border-l-white/20">content</Content>
      </RootLayout>
    </>
  )
}

export default App
