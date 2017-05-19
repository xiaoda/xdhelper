/**
 * 格式模块
 *
 * @flow
 */

import XdModule from './'
import xdType from './type'

let xdMask = new XdModule({

  mobileMask (mobile: string | number): string {
    mobile = xdType.toStr(mobile)
    return `${mobile.slice(0, 3)}${'*'.repeat(4)}${mobile.slice(-4)}`
  },

  emailMask (email: string): string {
    let emailArray = email.split('@')
    if (emailArray[0].length > 4) email = `${emailArray[0].slice(0, -4)}****@${emailArray[1]}`
    else email = `${emailArray[0].charAt(0)}${'*'.repeat(emailArray[0].length - 1)}@${emailArray[1]}`
    return email
  },

  idNumMask (id: string | number): string {
    id = xdType.toStr(id)
    let start = 3
    let end = -4
    let reduce = 7
    if (id.length > 4 && id.length <= 8) {
      start = 1
      end = -2
      reduce = 3
    } else if (id.length <= 4) {
      return `${id.slice(0, 1)}${'*'.repeat(id.length - 1)}`
    }
    return `${id.slice(0, start)}${'*'.repeat(id.length - reduce)}${id.slice(end)}`
  }

})

module.exports = xdMask