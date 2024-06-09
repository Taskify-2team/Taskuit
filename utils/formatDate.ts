export const formatDate = (date: string) => {
  const newDate = date.toString().slice(0, 10)
  return newDate.replace(/-/g, '.')
}

export const formatDateTime = (date: string) => {
  const newDate = date.toString().slice(0, 10)
  const newTime = date.toString().slice(11, 16)
  return `${newDate.replace(/-/g, '.')} ${newTime}`
}

export const formatDatePicker = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export const parseDatePicker = (date: string) => {
  const parts = date.split(/[- :]/)

  const year = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1
  const day = parseInt(parts[2], 10)
  const hours = parseInt(parts[3], 10)
  const minutes = parseInt(parts[4], 10)

  return new Date(year, month, day, hours, minutes)
}
