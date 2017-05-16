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
        let copyArgs = JSON.parse(JSON.stringify(args))
        if (args.length) {
          for (let i = args.length - 1; i > 0; i--) {
            args.splice(i, 0, ',')
          }
        }
        return ((): mixed => {
          try {
            let result = this['funcs'][key].apply(this.outputModule, copyArgs)
            if (config.showTrace()) {
              let infoMsg = [`[trace] ${key}`]
              if (args.length) {
                infoMsg = [`${infoMsg[0]} | params >`, ...args]
              }
              infoMsg = [...infoMsg, '| result >', result]
              console.info(...infoMsg)
            }
            return result
          } catch (e) {
            if (config.showErr()) {
              let errMsg = [`[error] ${key}`]
              if (args.length) {
                errMsg = [`${errMsg[0]} | params >`, ...args]
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
