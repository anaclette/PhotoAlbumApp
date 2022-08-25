export const randomIcon = () => {
  const iconNames = [
    'beer',
    'bicycle',
    'airplane',
    'color-palette',
    'flower',
    'book',
    'american-football',
    'heart',
    'paw',
    'star',
    'game-controller',
  ];

  return iconNames[Math.floor(Math.random() * iconNames.length)];
};
