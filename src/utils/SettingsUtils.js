export const getFontSizeDefaultOption = () => {
  return 'MEDIUM';
}

export const getFontSizeOptions = () => {
  return [
    { label: 'Pequeño', value: 'SMALL' },
    { label: 'Mediano', value: 'MEDIUM' },
    { label: 'Grande', value: 'LARGE' }
  ];
}

export const getColorModeDefaultOption = () => {
  return 'ORIGINAL';
}

export const getColorModeOptions = () => {
  return [
    { label: 'Modo original', value: 'ORIGINAL' },
    { label: 'Modo daltónico', value: 'COLOR_BLIND' }
  ];
}

export const getElementsPerPageDefaultOption = () => {
  return '8';
}

export const getElementsPerPageOptions = () => {
  return [
    { label: '4', value: '4' },
    { label: '8', value: '8' },
    { label: '16', value: '16' }
  ];
}