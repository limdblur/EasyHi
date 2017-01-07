import {COACH, VISITOR, MANAGER, SERVICE, MERCHANT, ROLE_NAMES, STAFFS} from '../constants'

import utils from 'utils'

const PARSE_PATH = 'PARSE_PATH'
const SET_ROLES = 'SET_ROLES'
const SET_CURRENT_ROLES = 'SET_CURRENT_ROLES'
const SET_MOBILE = 'SET_MOBILE'
const INITIALIZE = 'INITIALIZE'
const TOGGLE_SUBSCRIBE_TYPE = 'TOGGLE_SUBSCRIBE_TYPE'
const TOGGLE_MENU_OPEN = 'TOGGLE_MENU_OPEN'
const TOGGLE_MENU_SHOW = 'TOGGLE_MENU_SHOW'

let base = ''

const INIT_STATE = {
  ctx: base,
  tcode: null,
  base
}

Object.assign(utils, INIT_STATE, {
  replaceRoute(route) {
    history.replaceState(null, null, base + route)
  }
})

let isStatic
let suffix

const state = Object.assign({
  mobile: null,
  authorized: false,
  roles: [VISITOR],
  currentRole: VISITOR,
  currentRoleName: ROLE_NAMES[VISITOR],
  isAdmin: false,
  menuOpen: false,
  menuShow: false,
  initialized: false,
  merchantName: null,
  subscribeType: 0,
  oldServer: null
}, INIT_STATE)

const getters = {
  mobile: state => state.mobile,
  authorized: state => state.authorized,
  ctx: state => state.ctx,
  tcode: state => state.tcode,
  base: state => state.base,
  roles: state => state.roles,
  currentRole: state => state.currentRole,
  currRole: state => state.currentRole.toLowerCase(),
  currentRoleName: state => ROLE_NAMES[state.currentRole],
  isStaff: state => STAFFS.includes(state.currentRole),
  isAdmin: state => [MERCHANT, MANAGER, SERVICE].includes(state.currentRole),
  menuOpen: state => state.menuOpen,
  menuShow: state => state.menuShow,
  initialized: state => state.initialized,
  subscribeType: state => state.subscribeType,
  oldServer: state => state.oldServer,
  urlPrefix: state => state.oldServer + (getters.isStaff(state) ? 'merchant' : 'member') + suffix + '#',
  memberUrlPrefix: state => state.oldServer + 'member' + suffix + '#',
  merchantUrlPrefix: state => state.oldServer + 'merchant' + suffix + '#'
}

const actions = {
  parsePath({commit}, path) {
    if (!path.startsWith(CONTEXT)) return

    const tcode = path.split('/').splice(1, 2)[1] || ''

    commit(PARSE_PATH, {
      ctx: CONTEXT,
      tcode,
      base: CONTEXT + '/' + tcode
    })
  },
  initialize({commit}, payload) {
    commit(INITIALIZE, payload)
  },
  toggleSubscribeType({commit}, subscribeType) {
    commit(TOGGLE_SUBSCRIBE_TYPE, subscribeType)
  },
  setRoles({commit}, roles = [VISITOR]) {
    commit(SET_ROLES, roles)
  },
  setCurrentRole({commit}, currentRole = VISITOR) {
    commit(SET_CURRENT_ROLES, currentRole)
  },
  setMobile({commit}, mobile) {
    commit(SET_MOBILE, mobile)
  },
  resetRole({dispatch}, {roles, currentRole, mobile} = {}) {
    dispatch('setRoles', roles)
    dispatch('setCurrentRole', currentRole)
    dispatch('setMobile', mobile)
  },
  toggleMenuOpen({commit}, menuOpen) {
    commit(TOGGLE_MENU_OPEN, menuOpen)
  },
  toggleMenuShow({commit}, menuShow) {
    commit(TOGGLE_MENU_SHOW, menuShow)
  }
}

const mutations = {
  [PARSE_PATH](state, payload) {
    base = payload.base
    Object.assign(state, payload)
    Object.assign(utils, payload)
  },
  [SET_MOBILE](state, mobile) {
    state.authorized = !!(state.mobile = mobile)
  },
  [INITIALIZE](state, {coachAlias, merchantName}) {
    coachAlias && (ROLE_NAMES[COACH] = coachAlias)
    state.initialized = true
    state.merchantName = merchantName
    isStatic = /\/yoga-system-res\//.test(OLD_SERVER_PREFIX)
    suffix = isStatic ? '.html' : ''
    state.oldServer = OLD_SERVER_PREFIX + (isStatic ? 'dev/modules/index/html/' : `center/${state.tcode}/index/`)
  },
  [TOGGLE_SUBSCRIBE_TYPE](state, subscribeType) {
    state.subscribeType = subscribeType
  },
  [SET_ROLES](state, roles) {
    state.roles = roles
  },
  [SET_CURRENT_ROLES](state, currentRole) {
    state.currentRole = currentRole
    state.currentRoleName = ROLE_NAMES[currentRole]
  },
  [TOGGLE_MENU_OPEN](state, menuOpen) {
    state.menuOpen = menuOpen
  },
  [TOGGLE_MENU_SHOW](state, menuShow) {
    state.menuShow = menuShow
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
