import { async } from '@firebase/util'
import create, { StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import axios from 'axios'

const useDataStore = create(
  devtools((set) => ({
    data: [],
    fetch: async (dataUrl) => {
      const response = await axios.get(dataUrl)
      set({
        data: await response.data,
      })
    },
  }))
)

export default useDataStore
