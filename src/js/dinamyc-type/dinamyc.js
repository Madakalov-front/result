export const dinamycType = () => {
  let age = 28;
  console.log(Number(age), Boolean(age), String(age));

  let money = 101n;
  console.log(Number(money), Boolean(money), String(money));

  let name = "Egor";
  console.log(Number(name), Boolean(name), String(name));

  let student = true;
  console.log(Number(student), Boolean(student), String(student));

  let diplomaResult = undefined;
  console.log(
    Number(diplomaResult),
    Boolean(diplomaResult),
    String(diplomaResult)
  );

  let children = null;
  console.log(Number(children), Boolean(children), String(children));

  let catName = Symbol("Sema");
  console.log(Boolean(catName), String(catName));

  let obj = {
    car: "Ford",
  };
  console.log(Number(obj), Boolean(obj), String(obj));

};
