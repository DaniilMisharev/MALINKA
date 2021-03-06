const mongoose = require('mongoose')

const PinSettingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pinNum: {
    type: Number,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
    default: false,
  },
  pinType: {
    type: String,
    required: true,
  },
  availableCommands: {
    type: Array
  },
})
const PinSettings = mongoose.model('PinSetting', PinSettingSchema)
module.exports = PinSettings
