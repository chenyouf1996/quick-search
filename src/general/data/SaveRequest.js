const Enum = {
  FILE_NAME: 'fileName',
  TITLE: 'title',
  FILTERS: 'filters'
}
class SaveRequest {
  static create (fileName, title, filters) {
    let re = {}
    re[Enum.FILE_NAME] = fileName
    re[Enum.TITLE] = title
    re[Enum.FILTERS] = filters
    return re
  }
  static fileName (saveRequest) {
    return saveRequest[Enum.FILE_NAME]
  }
  static title (saveRequest) {
    return saveRequest[Enum.TITLE]
  }
  static filters (saveRequest) {
    return saveRequest[Enum.FILTERS]
  }
}
export default SaveRequest
