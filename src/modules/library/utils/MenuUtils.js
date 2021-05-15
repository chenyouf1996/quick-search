'use strict'
/**
* Author : fangtao
* Date : 8 Feb 2018
* Support : 525398535@qq.com
*/
/**
 * 添加Role对象 accelerator 用于部分情况显示不出快捷键 增强显示的作用
 * @param {String} role
 * @returns
 */
const createRole = (label, role, accelerator) => {
  return {
    label,
    role,
    accelerator
  }
}
/**
 * 添加菜单按钮
 * @param {String} label
 * @param {String} cmd
 * @param {String} accelerator
 * @returns
 */
const createItem = (label, cmd, data = null, accelerator = null, enabled = true) => { // 这里的checked表示是否可以自动切换
  let template = {
    label,
    accelerator,
    enabled,
    click: (menuItem, browserWindow, event) => {
      emit(cmd, data)
    }
  }
  return template
}

const createCheckbox = (label, cmd, data, selected = false, enabled = true) => {
  let template = {
    label,
    enabled,
    type: 'checkbox',
    checked: selected,
    click: (menuItem, browserWindow, event) => {
      let checkboxData = createCheckboxData(data, menuItem.checked)
      emit(cmd, checkboxData)
    }
  }
  return template
}
const createCheckboxData = (data, checked) => {
  return {data, checked}
}
/**
 * 添加菜单组
 * @param {String} label
 * @param {Array} items 数组
 * @param {String} role 缺省
 * @returns
 */
const createGroup = (label, items, role) => {
  let template = {
    label: label,
    submenu: items,
    role: role
  }
  return template
}
/**
 * 添加分隔符
 * @returns
 */
const createSeparator = () => {
  return {
    type: 'separator'
  }
}
export {
  createGroup,
  createItem,
  createCheckbox,
  createRole,
  createSeparator
}
