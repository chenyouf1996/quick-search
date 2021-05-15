import BaseAssistant from 'modules/assistant/BaseAssistant'

class StorageAssistant extends BaseAssistant {
  startSearch (windowSession, searchSession) { // todo fang 可以做映射层这样方便抽象迁移
    localStorage.setItem(windowSession, searchSession)
  }
  stopSearch (windowSession) {
    localStorage.removeItem(windowSession)
  }

  hasSearch (windowSession, searchSession) {
    return localStorage.getItem(windowSession) === searchSession
  }
  hasOtherSearch (windowSession, searchSession) {
    let has = Boolean(localStorage.getItem(windowSession))
    let same = this.hasSearch(windowSession, searchSession)
    return has && !same
  }
}
export default StorageAssistant
