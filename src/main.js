import './style.css'
import ErrorCustom from './error.js';
import CompteBancaire from './ex_06.js';

let clients = [
  new CompteBancaire('Alex', 1000),
  new CompteBancaire('Clovis', 1000),
  new CompteBancaire ('Marco',1000)
]
clients[0].ajout(100);
console.log(clients);
clients[1].ajout(1000);
clients[2].ajout(1000);
try {
  clients[0].retrait(100);
} catch (error) {
  console.error(error.message)
}
try {
  clients[2].virement(clients[1],300)
} catch (error) {
  console.log(error.message)
}
console.log(clients)
clients[1].ajout(300);
try {
  clients[2].retrait(300);
} catch (error) {
  console.log(error.message)
}
try {
  clients[0].retrait(1200)
} catch (error) {
  console.log(error.message)
}
for (let i = 0; i < clients.length; i++){
  console.log(clients[i])
}
