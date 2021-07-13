const alertsStore = {
  state: {
    alerts: []
  },
  getters: {
    getAlerts(state) {
      return state.alerts;
    }
  },
  mutations: {
    addAlert(state, { msg, variant }) {
      const index = state.alerts.length;
      state.alerts.push({
        id: index,
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