export default function (counter = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return counter + 2
    default:
      return counter
  }
}
