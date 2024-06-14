/**
 *
 * @param cardTags 스토어에 있는 columnId 배열
 * @param cardId 현재 컨텍스트의 cardId
 */
const findTag = ({ cardTags, cardId }) => {
  if (cardTags) {
    const foundTag = cardTags.find((tag: any) => tag.cardId === cardId)
    if (foundTag) {
      return foundTag.tags
    }
  }
}

export default findTag
