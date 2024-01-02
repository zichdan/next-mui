import { Inter } from 'next/font/google'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Dashboard from './dashboard/Dashboard'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Header/>
      <SideMenu/>
      <Dashboard/>  
    </main>
  )
}
