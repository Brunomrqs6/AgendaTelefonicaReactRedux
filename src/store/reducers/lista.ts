import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import Lista from '../../models/Lista'

type ListaState = {
  itens: Lista[]
}

const initialState: ListaState = {
  itens: [
    {
      nome: 'Bruno Marques',
      telefone: '(61) 97400-8472',
      email: 'brunomrqs6@gmail.com',
      id: 1
    },
    {
      nome: 'Hudson Fernando',
      telefone: '(61) 97400-8472',
      email: 'aaaa@gmail.com',
      id: 2
    },
    {
      nome: 'Leandro Raxixe',
      telefone: '(61) 97400-8472',
      email: 'bbb@gmail.com',
      id: 3
    }
  ]
}

const listaSlice = createSlice({
  name: 'lista',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((lista) => lista.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Lista>) => {
      const indexDaLista = state.itens.findIndex(
        (l) => l.id === action.payload.id
      )

      if (indexDaLista >= 0) {
        state.itens[indexDaLista] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Lista, 'id'>>) => {
      const telefoneJaExiste = state.itens.find(
        (lista) => lista.telefone === action.payload.telefone
      )
      const emailJaExiste = state.itens.find(
        (lista) =>
          lista.email.toLowerCase() === action.payload.email.toLowerCase()
      )

      if (telefoneJaExiste && emailJaExiste) {
        alert('Ja existe um contato com este email ou telefone')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = listaSlice.actions

export default listaSlice.reducer
