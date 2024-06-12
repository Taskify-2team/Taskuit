/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { getCardList, updateCard } from '@/service/cards'
import { Card } from '@/types/dashboard'
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  cardList: any
  cursorId: any
  totalCount: any
  cardListStatus: string
}

const initialState: initialStateType = {
  cardList: {},
  cursorId: {},
  totalCount: {},
  cardListStatus: '',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    deleteCardItem: (state, action) => {
      const { columnId, cardId } = action.payload
      state.cardList[columnId] = state.cardList[columnId]?.filter(
        (cardItem: Card) => cardItem.id !== cardId,
      )
      state.totalCount[action.payload.columnId] -= 1
    },
    orderingCardList: (state, action) => {
      const { columnId } = action.payload
      state.cardList[columnId] = [...state.cardList[columnId]].sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
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
            state.cardList[columnId] = [...state.cardList[columnId], card]
          }
          const foundIndex = state.cardList[columnId].findIndex((v: Card) => v.id === card.id)
          if (foundIndex === -1) {
            state.cardList[columnId] = [...state.cardList[columnId], card]
          } else {
            state.cardList[columnId][foundIndex] = card
          }
          state.cursorId[columnId] = action.payload.cursorId || null
          state.totalCount[columnId] = action.payload.totalCount || '0'
        })
      })
      .addCase(getCardList.rejected, (state) => {
        state.cardListStatus = 'rejected'
      })
      .addCase(updateCard.pending, (state) => {
        state.cardListStatus = 'pending'
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.cardListStatus = 'fulfilled'
        const { columnId } = action.payload
        if (!state.cardList[columnId]) {
          state.cardList[columnId] = []
          state.cardList[columnId] = [...state.cardList[columnId], action.payload]
        }
        const foundIndex = state.cardList[columnId].findIndex(
          (v: Card) => v.id === action.payload.id,
        )
        if (foundIndex === -1) {
          state.cardList[columnId] = [...state.cardList[columnId], action.payload]
        } else {
          state.cardList[columnId][foundIndex] = action.payload
        }
      })
      .addCase(updateCard.rejected, (state) => {
        state.cardListStatus = 'rejected'
      })
  },
})

export const { deleteCardItem, orderingCardList } = cardSlice.actions

export default cardSlice.reducer
