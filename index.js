module.exports = (strings, ...args) => {
  let totalElements = strings.length + args.length
  let intertwined = new Array(totalElements)

  for (let i = 0, j = 0; i < args.length; j += 2, i++) {
    intertwined[j] = strings[i]
    intertwined[j + 1] = JSON.stringify(args[i])
  }

  intertwined[totalElements - 1] = strings[strings.length - 1]

  return intertwined.join('')
}