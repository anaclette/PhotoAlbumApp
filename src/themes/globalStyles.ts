import {checkIndexIsEven} from '../utils/stringUtils';

export const customBorder = (index: number) => {
  const isEven = checkIndexIsEven(index);
  return {
    borderLeftWidth: isEven ? 3 : 0,
    borderBottomWidth: isEven ? 1 : 0,
    borderRightWidth: !isEven ? 3 : 0,
    borderTopWidth: !isEven ? 1 : 0,
  };
};
