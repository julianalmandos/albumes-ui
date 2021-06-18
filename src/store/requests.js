const RequestStatus = Object.freeze({
  LOADING: Symbol("loading"),
  ERROR: Symbol("error"),
  EMPTY: Symbol("empty"),
  SUCCESS: Symbol("success")
})

const { SUCCESS, ERROR, EMPTY, LOADING } = RequestStatus

const requests = {
  state: {
    requestStatus: null
  },
  getters: {
    isLoading: state => state.requestStatus === LOADING,
    isError: state => state.requestStatus === ERROR,
    isEmpty: state => state.requestStatus === EMPTY,
    isSuccess: state => state.requestStatus === SUCCESS
  },
  mutations: {
    loading: state => state.requestStatus = LOADING,
    error: state => state.requestStatus = ERROR,
    empty: state => state.requestStatus = EMPTY,
    success: state => state.requestStatus = SUCCESS
  }
}

export default requests