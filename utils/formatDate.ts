const formatDate = (date: string) => {
  const newDate = date.toString().slice(0, 10)
  return newDate.replace(/-/g, '.')
}

export default formatDate
