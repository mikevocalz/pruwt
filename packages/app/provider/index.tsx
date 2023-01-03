import { AuthProvider } from 'app/features/auth/context'
import { Dripsy } from './dripsy'

import create from 'zustand';
import createContext from "zustand/context";
import dataStore from 'app/features/auth/context/store'

const { Provider, useStore } = createContext();

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Dripsy>{children}</Dripsy>
    </AuthProvider>

  )
}

export default AppProvider
