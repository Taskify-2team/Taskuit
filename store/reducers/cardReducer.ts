/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { getCardList } from '@/service/cards'
import { Card } from '@/types/dashboard'
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  cardList: any
  cursorId: any
  cardListStatus: string
}

const initialState: initialStateType = {
  cardList: {},
  cursorId: {},
  cardListStatus: '',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    deleteCardItem: (state, action) => {
      state.cardList[action.payload.columnId] = state.cardList[action.payload.columnId]?.filter(
        (cardItem: Card) => cardItem.id !== action.payload.cardId,
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
        let columnId
        action.payload.cards.forEach((card: Card) => {
          columnId = card.columnId
          if (!state.cardList[columnId]) {
            state.cardList[columnId] = []
            state.cardList[columnId].push(card)
          }
          const result = state.cardList[columnId].filter((v: Card) => v.id === card.id)
          if (result.length === 0) {
            state.cardList[columnId]?.push(card)
          }
          state.cursorId[columnId] = action.payload.cursorId || null
        })
      })
      .addCase(getCardList.rejected, (state) => {
        state.cardListStatus = 'rejected'
      })
  },
})

export const { deleteCardItem } = cardSlice.actions

export default cardSlice.reducer
