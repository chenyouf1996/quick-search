import EnvTypes from 'modules/app/enum/EnvTypes'

class EnvUtils {
  static filter (list, envType) {
    let re = list.filter((obj) => {
      let objEnvType = obj.env
      return (objEnvType === envType || objEnvType === EnvTypes.GENERAL)
    })
    return re
  }
}
export default EnvUtils
