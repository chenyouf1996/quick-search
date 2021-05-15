import PlatformTypes from 'modules/app/enum/PlatformTypes'

class PlatformUtils {
  static filter (list, platformType) {
    let re = list.filter((obj) => {
      let objPlatformType = obj.platform
      return (objPlatformType === platformType || objPlatformType === PlatformTypes.GENERAL)
    })
    return re
  }
}
export default PlatformUtils
