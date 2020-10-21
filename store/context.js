import { createContext, useCallback, useContext } from 'react'

export const StoreContext = createContext()

export const useStore = () => {
  const store = useContext(StoreContext)

  console.log(typeof window === 'undefined' ? 'on server' : 'on client')
  console.log('store:', store)

  // if (!store) throw new Error('useStore must be used within StoreProvider')
  // this would throw on server

  // without throw would get on client
  /**
   * Warning: Text content did not match. Server: "" Client: "{
      "a": 1
    }"
   */

  return store
}

export const StoreProvider = ({ children }) => {
  const initialStore = {a: 1}

  return <StoreContext.Provider value={initialStore}>{children}</StoreContext.Provider>
}

