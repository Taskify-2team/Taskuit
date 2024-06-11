/* eslint-disable no-param-reassign */
import { getCardList } from '@/service/cards'
import { CardList } from '@/types/dashboard'
import { createSlice } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'

enableMapSet()

interface initialStateType {
  cardList: any
  cardListStatus: string
}

const initialState: initialStateType = {
  cardList: {},
  cardListStatus: '',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cardList.cards = state.cardList.cards.map((card) =>
        card.id === action.payload.newCardBody.id
          ? { ...card, title: action.payload.newCardBody.title }
          : card,
      )
    },
    deleteCard: (state, action) => {
      state.cardList.cards = state.cardList.cards.filter(
        (prevColumn) => prevColumn.id !== action.payload.id,
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardList.pending, (state) => {
        state.cardListStatus = 'pending'
      })
      .addCase(getCardList.fulfilled, (state, action) => {
        state.cardListStatus = 'fulfilled'
        action.payload.cards.forEach((card, i) => {
          const { columnId } = card
          if (!state.cardList[columnId]) {
            state.cardList[columnId] = []
            state.cardList[columnId].push(card)
          } else if (state.cardList[columnId][i]?.id !== card.id) {
            state.cardList[columnId].push(card)
          }
        })
      })
      .addCase(getCardList.rejected, (state) => {
        state.cardListStatus = 'rejected'
      })
  },
})

export const { addCard, deleteCard } = cardSlice.actions

export default cardSlice.reducer
