const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const sperator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + sperator;

    
}

const rta = elements.join('--');

console.log('for', rtaFinal);
console.log('join', rta);


const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);