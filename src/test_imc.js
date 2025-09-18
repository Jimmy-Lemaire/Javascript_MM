import Imc from './ex_04.js'
const sebastien=new Imc ("Sébastien Chabal",135,1.7);
console.log(sebastien);
const escaladeuse = new Imc ("Escaladeuse",45,1.68);
const jojo = new Imc("JOJO",300,2);
const gontrand = new Imc("Gontrand", 90, 1.75);
const colonel_clock = new Imc("Colonel Clock", 200, 1.75);
const josiane=new Imc("Josiane de la Vega", 99, 1.55);
console.log(jojo.calculImc());
console.log(sebastien.calculImc());
console.log(escaladeuse.calculImc());
console.log(gontrand.calculImc());
console.log(colonel_clock.calculImc());
console.log(josiane.calculImc());
let list = [
    sebastien,escaladeuse,jojo,gontrand,colonel_clock,josiane
]
console.log(list)
for (let i=0; i<list.length;i++){
    list[i].display()
}