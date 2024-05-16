import { configureStore } from '@reduxjs/toolkit'

import listaReducer from './reducers/lista'
import buscaReducer from './reducers/busca'

const store = configureStore({
  reducer: {
    listas: listaReducer,
    busca: buscaReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
