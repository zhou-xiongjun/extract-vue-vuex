const applyMixin = (Vue) => {
  Vue.mixin({
    beforeCreate: vuexInit
  })
}

function vuexInit() {
  const options = this.$options;
  if (options.store) {
    // 跟实例
    this.$store = options.store;
  } else if (options.parent && options.parent.$store) {
    // 子组件
    this.$store = options.parent && options.parent.$store;
  }
}

export default applyMixin;