import AppContextProvider from '@/context/AppContextProvider'
import Layout from '@/components/Layout'

export default function App() {

  return <>
    <AppContextProvider>
      <div className='min-h-screen'>
        <Layout />
      </div>
    </AppContextProvider>
  </>
}