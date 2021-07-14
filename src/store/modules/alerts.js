const alertsStore = {
  state: {
    alerts: [],
    currentIndex: 0
  },
  getters: {
    getAlerts(state) {
      return state.alerts;
    }
  },
  mutations: {
    addAlert(state, { msg, variant }) {
      let index;
      state.alerts.push({
        id: index = state.currentIndex++,
        msg,
        variant: variant || 'success'
      });
      setTimeout(() => {
        const deleteIndex = state.alerts.find(alert => alert.id === index);
        state.alerts.splice(deleteIndex, 1);
      }, 3000);
    }
  }
}

export default alertsStore