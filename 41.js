// object destructuring
const band={
    bandName:"Aie ekvira banjo party",
    famousSong:"Aie ekvira",
    year:2001,
    village:"jambhulpada",
    fees:25000,
};
// const {bandName,famousSong}=band;
// console.log(bandName)
// but if we want to store value in another named of variable
//then use ":" example below 
// const {bandName:var1,famousSong:var2}=band;
// const{fees:money}=band
// console.log(money)
// // console.log(var1)

// // now if we want to store ramainig key values 
// //use ... spread operator

// const {bandName,famousSong, ...remainig}=band;
// console.log(bandName)
// console.log(famousSong)
// console.log(remainig)