export const handleUserMessage = (
  username: string,
  isDiffAccount?: boolean,
) => {
  return isDiffAccount ? `Not ${username}?` : `Hello, ${username}`;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const checkIfEmpty = (
  input: string,
  setEmptyField: (value: boolean) => void,
) => {
  if (input === '') {
    setEmptyField(true);
  } else {
    setEmptyField(false);
  }
};

export const checkIndexIsEven = (n: number) => {
  return n % 2 == 0;
};

export const validateUserInput = (input: string) => {
  const acceptedValue = /^[a-z0-9]+$/i;
  return acceptedValue.test(input) == false;
};

export const getIconName = (route: {name: string}) => {
  let iconName: string = '';
  switch (route.name) {
    case 'Albums':
      iconName = 'camera-outline';
      break;

    case 'Photos':
      iconName = 'images-outline';
      break;

    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Profile':
      iconName = 'person-outline';
      break;
  }
  return iconName;
};
