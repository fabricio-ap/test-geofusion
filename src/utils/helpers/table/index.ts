export const sliceArray = (arr: any[], quantity: number) => {
  return arr.reduce((array, item, index) => {
    const chunkIndex = Math.floor(index / quantity);
    if (!array[chunkIndex]) {
      array[chunkIndex] = [];
    }
    array[chunkIndex].push(item);
    return array;
  }, []);
};
