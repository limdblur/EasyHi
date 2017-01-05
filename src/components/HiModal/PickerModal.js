import HiPicker from '../HiPicker'
import ModalItem from './ModalItem'

import {error} from 'utils'

import classes from './picker-modal.styl'

export default require('./picker-modal.pug')({
  props: ['close', 'confirm', 'footer', 'transition', 'pickers',
    'pickerChanged', 'pickerDivider', 'pickerTitle', 'visibleCount'],
  data() {
    return {classes}
  },
  methods: {
    closePicker() {
      this.close ? this.close.call(this.$refs.picker, ...arguments) : this.$modal.close()
    },
    confirmPicker() {
      this.confirm ? this.confirm.call(this.$refs.picker, ...arguments)
        : error('you should handle the click event on the confirm btn by yourself!')
    },
    itemChanged() {
      this.pickerChanged && this.pickerChanged(...arguments)
    }
  },
  components: {
    HiPicker,
    ModalItem
  }
})