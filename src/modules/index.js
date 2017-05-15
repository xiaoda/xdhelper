class XdModule {
  constructor (funcs = {}) {
    this.funcs = funcs
    this.outputModule = {}

    this.injectFuncs()
    this.freezeFuncs()

    return this.outputModule
  }

  injectFuncs () {
    Object.keys(this.funcs).forEach((key, index) => {
      this['outputModule'][key] = (...args) => {
        if (args[0] === undefined) args = []
        return (() => {
          try {
            let result = this['funcs'][key].apply(this.outputModule, args)
            if (config.showTrace()) {
              let infoMsg = [`[trace] ${key}`]
              if (args.length) {
                for (let i = args.length - 1; i > 0; i--) {
                  args.splice(i, 0, ',')
                }
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
                for (let i = args.length - 1; i > 0; i--) {
                  args.splice(i, 0, ',')
                }
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
