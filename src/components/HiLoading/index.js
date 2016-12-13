export default require('./index.pug')({
  name: 'hi-loading',
  props: {
    className: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'snake'
    }
  },
  data() {
    return {
      classes: require('./index.styl')
    }
  }
})
