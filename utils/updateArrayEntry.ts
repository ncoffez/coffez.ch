export function updateArrayEntry(array: any[], changes: any) {
  const index = array.findIndex(item => item.id === changes.doc.id);

  if (index !== -1) {
    array[index] = { ...array[index], ...changes.doc.data() };
  }

  return array;
}