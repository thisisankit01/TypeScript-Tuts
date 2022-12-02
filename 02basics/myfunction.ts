function getValue(myVal: number): string{
if (myVal > 5){
  return "";
}
return '200 OK'
}

//in arrow function

const getHello = (s: string):string => {
      return s;
}


const hero = ["thor", "spiderman", "ironman"];

hero.map(hero => {
  return `hero is ${hero}`
});


