const SET_SIZE = 'SET_SIZE';

const state = {
  baseWidth: 375,
  baseFontSize: 16,
  winHeight: 0,
  winWidth: 0,
  rem: 1,
  fontSize: 16,
  logicWidth: 375,
  threshold: 768
};

const getters = {
  baseWidth: state => state.baseWidth,
  baseFontSize: state => state.baseFontSize,
  winHeight: state => state.winHeight,
  winWidth: state => state.winWidth,
  rem: state => state.rem,
  fontSize: state => state.fontSize,
  logicWidth: state => state.logicWidth,
  threshold: state => state.threshold
};

const actions = {
  setSize({commit}, size) {
    commit(SET_SIZE, size);
  }
};

const mutations = {
  [SET_SIZE](state, {winHeight, winWidth}) {
    const payload = {winHeight, winWidth};
    const baseWidth = state.baseWidth;
    payload.rem = (payload.logicWidth =
        winWidth < state.threshold ? winWidth : baseWidth) / baseWidth;
    payload.fontSize = payload.logicWidth * state.baseFontSize / baseWidth;
    Object.assign(state, payload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};