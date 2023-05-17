import applyMixin from './mixin'
import { forEach } from './utils'


let Vue;

class Store {
  constructor(options) {
    let state = options.state;
    this.getters = {}
    const computed = {}

    forEach(options.getters, (fn, key) => {
      // 利用计算属性实现缓存
      computed[key] = () => {
        return fn(this.state)
      }
      Object.defineProperty(this.getters, key, {
        // 直接返回计算属性的值
        get: () => this.vm[key]
      })
    })


    this.vm = new Vue({
      data: {
        $$state: state,
      },
      computed
    });

    this._mutations = {}
    forEach(options.mutations, (fn, type) => {
      this._mutations[type] = (payload) => {
        return fn.call(this, this.state, payload)
      }
    });

    this.commit = (type, payload) => {
      this._mutations[type](payload)
    }

    this.dispatch = (type, payload) => {
      this._actions[type](payload)
    }

    this._actions = {};
    forEach(options.actions, (fn, type) => {
      this._actions[type] = (payload) => {
        return fn.call(this, this, payload)
      }
    });

  }

  get state() {
    return this.vm._data.$$state
  }

}

/**
 * 初始化的时候，将store挂载到每个组件实例上
 * @param {} _Vue 
 */
const install = (_Vue) => {
  Vue = _Vue
  applyMixin(Vue)
}


export {
  Store,
  install
}