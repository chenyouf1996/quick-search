import MainEvents from 'general/enum/MainEvents'

let list = [
  ['alt+q', MainEvents.WINDOW_SHOW],
  ['alt+e', MainEvents.WINDOW_HIDE]
]

let configShortcut = new Map(list)
export default configShortcut
