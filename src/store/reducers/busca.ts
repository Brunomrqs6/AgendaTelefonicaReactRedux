import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BuscaState = {
  termo: string
}

const initialState: BuscaState = {
  termo: ''
}
const buscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = buscaSlice.actions

export default buscaSlice.reducer
