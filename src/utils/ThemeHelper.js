import store from '../store'

export const loadTheme = async () => {
  await store.dispatch('getUser');
  document.documentElement.setAttribute('data-theme', getTheme(store.getters.getSettings.color_mode));
}

export const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', getTheme(theme));
}

const getTheme = (theme) => {
  return theme === 'HIGH_CONTRAST' ? 'high-contrast' : 'normal';
}
