export const typeOf = () => {
  const typeData = {
    num: 101,
    bigInt: 102n,
    string: "Hello JS",
    null: null,
    undefined: undefined,
    symbol: Symbol("id"),
    boolean: true,
    obj: 'object',
  };
  for (let key in typeData) {
    console.log(key, typeData[key], typeof typeData[key])
  }
};
