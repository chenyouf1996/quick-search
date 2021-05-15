'use strict'
import EnumUtils from 'modules/library/utils/EnumUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'

const MainActions = {
  WINDOW_PIDS: 'windowPids',
  OPTION_URL: 'optionURL',
  ROOT_URL: 'rootURL',
  READ_PDF: 'readPDF',
  PROTOCOL_EXIST: 'protocolExist',
  ALL_WINDOW_DATAS: 'allWindowDatas',
  FILE_URL: 'fileURL'
}
EnumUtils.wrap(MainActions, ProcessTypes.MAIN)

export default MainActions
