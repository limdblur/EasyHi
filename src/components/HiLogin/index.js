import {mapGetters, mapActions} from 'vuex'

import classes from './index.styl'

export default require('./index.pug')({
  name: 'login',
  data() {
    return {
      classes,
      limit: 0,
      loginMobile: null,
      verificationCode: null
    }
  },
  props: {
    confirmName: String,
    confirmBehavior: Function
  },
  created() {
    this.loginMobile = this.mobile
  },
  computed: {
    ...mapGetters(['mobile'])
  },
  methods: {
    ...mapActions(['setEnv', 'resetRole']),
    clearMobile() {
      this.loginMobile = null
      this.$refs.mobile.focus()
    },
    getVerificationCode() {
      const loginMobile = this.$v.loginMobile

      loginMobile.$touch()

      if (this.limit || loginMobile.$error) return

      this.$http.post('/getVerificationCode', {
        mobile: this.loginMobile
      }).then(({data}) => {
        this.limit = data
        const intervalId = setInterval(() => {
          --this.limit || clearInterval(intervalId)
        }, 1000)
      })
    },
    submit() {
      const vMobile = this.$v.loginMobile
      const vCode = this.$v.verificationCode

      vMobile.$touch()
      vCode.$touch()

      if (vMobile.$error || vCode.$error) return

      const mobile = this.loginMobile

      this.$http.post('/verifyCode', {
        verificationCode: this.verificationCode,
        mobile
      }).then(({data}) => {
        const {error} = data
        if (error) return this.$util.alert(error)
        this.setEnv({mobile, authorized: true})
        this.resetRole(data)
        this.confirmBehavior && this.confirmBehavior()
      })
    }
  },
  validator: {
    loginMobile: {
      mobile: true
    },
    verificationCode: {
      length: 6
    }
  }
})