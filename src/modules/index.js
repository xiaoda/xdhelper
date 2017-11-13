/**
 * 构造类
 * @flow
 */

class XdModule {
  constructor (funcs: object = {}): object {
    this.funcs = funcs
    this.outputModule = {}

    this.injectFuncs()
    this.freezeFuncs()

    return this.outputModule
  }

  injectFuncs () {
    Object.keys(this.funcs).forEach((key: number, index: string) => {
      this['outputModule'][key] = (...args: array): mixed => {
        if (args[0] === undefined) args = []
        let copyArgs = args.map((i: mixed, k: number): mixed => {
          if (typeof i === 'function') return i
          else return JSON.parse(JSON.stringify(i))
        })
        if (copyArgs.length) {
          for (let i = copyArgs.length - 1; i > 0; i--) {
            copyArgs.splice(i, 0, ',')
          }
        }
        return ((): mixed => {
          try {
            let result = this['funcs'][key].apply(this.outputModule, args)
            if (config.showTrace()) {
              let infoMsg = [`[trace] ${key}`]
              if (copyArgs.length) {
                infoMsg = [`${infoMsg[0]} | params >`, ...copyArgs]
              }
              infoMsg = [...infoMsg, '| result >', result]
              console.info(...infoMsg)
            }
            return result
          } catch (e) {
            console.error(e)
            if (config.showErr()) {
              let errMsg = [`[error] ${key}`]
              if (copyArgs.length) {
                errMsg = [`${errMsg[0]} | params >`, ...copyArgs]
              }
              console.error(...errMsg)
            }
            return null
          }
        })()
      }
    })
  }

  freezeFuncs () {
    Object.freeze(this.outputModule)
  }
}

module.exports = XdModule
