export const formatDate = (date: string) => {
  const newDate = date.toString().slice(0, 10)
  return newDate.replace(/-/g, '.')
}

export const formatDateTime = (date: string) => {
  const newDate = date.toString().slice(0, 10)
  const newTime = date.toString().slice(11, 16)
  return `${newDate.replace(/-/g, '.')} ${newTime}`
}
