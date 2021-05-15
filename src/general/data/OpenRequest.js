const Enum = {
  FILE_PATH: 'filePath',
  TITLE: 'title',
  PROPERTIES: 'properties',
  FILTERS: 'filters'
}
class OpenRequest {
  static filePath (openRequest) {
    return openRequest[Enum.FILE_PATH]
  }
  static properties (openRequest) {
    return openRequest[Enum.PROPERTIES]
  }
  static title (openRequest) {
    return openRequest[Enum.TITLE]
  }
  static filters (openRequest) {
    return openRequest[Enum.FILTERS]
  }
  static create (filePath, title, filters, properties) {
    let re = {}
    re[Enum.FILE_PATH] = filePath
    re[Enum.TITLE] = title
    re[Enum.FILTERS] = filters
    re[Enum.PROPERTIES] = properties
    return re
  }
}
export default OpenRequest
