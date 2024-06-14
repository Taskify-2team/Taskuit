const throttle = (func: () => void) => {
  let timer
  if (!timer) {
    timer = setTimeout(() => {
      timer = null
      func()
    }, 200)
  }
}

export default throttle
