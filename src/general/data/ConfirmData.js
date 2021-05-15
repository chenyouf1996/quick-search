const Enum = {
  TYPE: 'type',
  TITLE: 'title',
  MESSAGE: 'message',
  CONFIRM_TEXT: 'confirmText',
  CANCEL_TEXT: 'cancelText'
}
class ConfirmData {
  static type (confirmData) {
    return confirmData[Enum.TYPE]
  }
  static title (confirmData) {
    return confirmData[Enum.TITLE]
  }
  static message (confirmData) {
    return confirmData[Enum.MESSAGE]
  }
  static confirmText (confirmData) {
    return confirmData[Enum.CONFIRM_TEXT]
  }
  static cancelText (confirmData) {
    return confirmData[Enum.CANCEL_TEXT]
  }
  static create (title, message, type, confirmText, cancelText) {
    let re = {}
    re[Enum.TYPE] = type
    re[Enum.TITLE] = title
    re[Enum.MESSAGE] = message
    re[Enum.CONFIRM_TEXT] = confirmText
    re[Enum.CANCEL_TEXT] = cancelText
    return re
  }
}
export default ConfirmData
