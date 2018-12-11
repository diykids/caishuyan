import co from 'co'
import { get } from './maping'
import { dialog } from './dialog'

const coProcess = (fn, options = {errHandle: null}) => {
  co(function* () {
    yield fn()
  }).catch(e => {
    if (options.errHandle) {
      co(function * () {
        yield options.errHandle(e)
      })
    }else{
      let msg = get(e,"message","未知错误")
      dialog.alert(msg)
    }
  })
}

export const sync = (fn,options) => coProcess(fn,options)
