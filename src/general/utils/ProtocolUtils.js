import ProtocolHeaders from 'general/enum/ProtocolHeaders'

class ProtocolUtils {
  static encodeFileURL (fpath) {
    let baseStr = Buffer.from(fpath).toString('base64')
    let url = ProtocolHeaders.OPEN_FILE + baseStr
    return url
  }
}
export default ProtocolUtils
