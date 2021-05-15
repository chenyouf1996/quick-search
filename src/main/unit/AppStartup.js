'use strict'
import { app } from 'electron'
import ISO from 'modules/app/ISO'
import MainFacade from 'modules/app/process/main/MainFacade'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import SessionUtils from 'modules/library/utils/SessionUtils'
import Flynn from 'general/Flynn'
import path from 'path'
import configMain from '@/config/configMain'
import AppEvents from 'modules/app/enum/AppEvents'

global.Promise = require('bluebird')
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

async function AppStartup () {
  if (!ISO.isDebug) {
    global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
  }

  ISO.processType = ProcessTypes.MAIN
  ISO.session = SessionUtils.take()
  // console.log('appSession', ISO.appSession)
  await app.whenReady()
  Flynn._.registFacade(MainFacade.getInstance(), configMain)
  Flynn._.unhandled.init()
  emit(AppEvents.MAIN_APP_READY)
}

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
export default AppStartup
