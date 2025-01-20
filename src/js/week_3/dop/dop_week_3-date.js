const peopleWithVisa = [
    {
        firstName: "Stasia",
        lastName: "Ward",
        criminalRecord: true,
        passportExpiration: "19.06.2040",
    },
    {
        firstName: "Elliot",
        lastName: "Baker",
        criminalRecord: false,
        passportExpiration: "04.06.2041",
    },
    {
        firstName: "Leighann",
        lastName: "Scott",
        criminalRecord: true,
        passportExpiration: "31.07.2039",
    },
    {
        firstName: "Nick",
        lastName: "Pop",
        criminalRecord: false,
        passportExpiration: "31.12.2010",
    },
];
const allowVisa = (visaList) => {
    function checkInfo(obj) {
        let passportFormat = obj.passportExpiration.split(".").reverse().join("-");
        passportFormat = new Date(passportFormat).getTime();
        const dateNow = Date.now();
        if (dateNow < passportFormat && !obj.criminalRecord) return true;
    }
   const people =  visaList.filter(item => checkInfo(item));
   return people
};

const result = allowVisa(peopleWithVisa);
console.log("result", result);
