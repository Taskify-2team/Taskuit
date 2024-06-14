const throttle = (func: () => void) => {
  let timer
  if (!timer) {
    timer = setTimeout(() => {
      timer = null
      func()
    }, 100)
  }
}

export default throttle
