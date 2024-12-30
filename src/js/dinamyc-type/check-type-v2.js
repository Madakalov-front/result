export const checkTypeV2 = () => {
  console.log(String(console.log));
  console.log(String({ name: "Maxim" }));
  console.log(String(Symbol("key")));
  console.log(String(Number));
  console.log(String(""));
  console.log(String(0));
  console.log(String(-10));
  console.log(String("-105"));
};
