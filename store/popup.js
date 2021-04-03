const state = () => ({
  popup: {
    type: 'alert',
    show: false,
    disableClickOutside: false,
    title: '',
    message: '',
    confirmText: '확인',
    cancelText: '취소',
    onConfirm: null,
    onCancel: null,
  },
})

const getters = {
  getPopup: (state) => {
    return state.popup
  },
}

const mutations = {
  commitPopup: (state, object) => {
    state.popup = object
  },
}

const actions = {
  dispatchPopup({ commit }, params) {
    commit('commitPopup', {
      confirmText: params.confirmText || '확인',
      cancelText: params.cancelText || '취소',
      ...params,
      show: true,
    })
  },
  dispatchClosePopup({ commit }, params) {
    commit('commitPopup', {
      type: 'alert',
      show: false,
      disableClickOutside: false,
      title: '',
      message: '',
      confirmText: '확인',
      cancelText: '취소',
      onConfirm: null,
      onCancel: null,
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
