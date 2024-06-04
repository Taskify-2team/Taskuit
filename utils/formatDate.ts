const formatDate = (date: string) => {
  const isoDate = date.toString().slice(0, 10)
  return isoDate.replace(/-/g, '.')
}

export default formatDate
