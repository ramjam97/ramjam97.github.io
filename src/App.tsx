import AppContextProvider from '@/context/AppContextProvider'
import Layout from '@/components/Layout'

export default function App() {
  return <AppContextProvider><Layout /></AppContextProvider>
}