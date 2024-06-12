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
        action.payload.cards.forEach((card: Card, i: number) => {
          columnId = card.columnId
          if (!state.cardList[columnId]) {
            state.cardList[columnId] = []
            state.cardList[columnId].push(card)
          }
          const result = state.cardList[columnId].filter((v: Card) => v.id !== card.id)
          if (!result) {
            state.cardList[columnId].push(card)
          } else if (
            state.cardList[columnId][i]?.title !== card.title ||
            state.cardList[columnId][i]?.description !== card.description ||
            state.cardList[columnId][i]?.tags !== card.tags ||
            state.cardList[columnId][i]?.dueDate !== card.dueDate ||
            state.cardList[columnId][i]?.assignee.id !== card.assignee.id ||
            state.cardList[columnId][i]?.imageUrl !== card.imageUrl ||
            state.cardList[columnId][i]?.updatedAt !== card.updatedAt
          ) {
            state.cardList[columnId][i] = card
          }
          if (!state.cursorId[columnId]) {
            state.cursorId[columnId] = action.payload.cursorId
          }
        })
      })
      .addCase(getCardList.rejected, (state) => {
        state.cardListStatus = 'rejected'
      })
  },
})

export const { deleteCardItem } = cardSlice.actions

export default cardSlice.reducer
