export const checkTypeV2 = () => {
  console.log(String(console.log));
  console.log(String({ name: "Maxim" }));
  console.log(String(Symbol("key")));
  console.log(String(Number));
  console.log(String(""));
  console.log(String(0));
  console.log(String(-10));
  console.log(String("-105"));
  console.log(Number(console.log));
  console.log(Number({ name: "Maxim" }));
  // console.log(Number(Symbol("key")));
  console.log(Number(Number));
  console.log(Number(""));
  console.log(Number(0));
  console.log(Number(-10));
  console.log(Number("-105"));
  console.log(Boolean(console.log));
  console.log(Boolean({ name: "Maxim" }));
  console.log(Boolean(Symbol("key")));
  console.log(Boolean(Number));
  console.log(Boolean(""));
  console.log(Boolean(0));
  console.log(Boolean(-10));
  console.log(Boolean("-105"));
};
