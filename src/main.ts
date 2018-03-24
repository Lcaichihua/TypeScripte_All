import { Animal } from "./modelo/animal/animal";
import {Gato} from "./modelo/animal/gato";
let gato :Animal ;
gato =new Gato('michi','mestizo');
console.log('gato',gato);
gato.desplazar();
(gato as Gato).ronronear();
// set nombre
gato.nombre ='tom';
// get nombre 
console.log('gato.nombre es  ',gato.nombre);
(<Gato>gato).ronronear();


