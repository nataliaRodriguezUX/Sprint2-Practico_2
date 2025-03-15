/*const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saacrist:r4KmR892vRyCZ4AS@cursadanodejs.ls9ii.mongodb.net/Node-js')

.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar MongoDB:', error));

*/

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Grupo-08:grupo08@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));



//esquema para los superheroes
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
}, { collection: 'Grupo-08' });
const SuperHero = mongoose.model('SuperHero', superheroSchema);

async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Thor',
        nombreReal: 'Thor Odinson',
        edad: 1000,
        planetaOrigen: 'Assgardddd',
        debilidad: 'Destruir su martillo',
        poderes: ['Controlar el trueno', 'Fuerza sobrehumana', 'Super fuerza', 'Agilidad'],
        aliados: ['Loki'],
        enemigos: ['Hela'],
        creador: 'Nata'
    });

    await hero.save();
    console.log('Superhéroe insertado:', hero);
}
// Llama a la función para probarla
//insertSuperHero();

async function insertSuperHero3() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Mujer maravilla',
        nombreReal: 'hmmmmm',
        edad: 10000,
        planetaOrigen: 'tierra',
        debilidad: 'no quiero buscar',
        poderes: ['hacer que digan la verdad', 'casi vuela', 'Super fuerza', 'Agilidad'],
        aliados: ['advengers'],
        enemigos: ['nose'],
        creador: 'Nata'
    });

    await hero.save();
    console.log('Superhéroe insertado:', hero);
}
// Llama a la función para probarla
//insertSuperHero3();


async function insertSuperHero2() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Ironmannnnnnn',
        nombreReal: 'Tony Stark',
        edad: 15,
        planetaOrigen: 'Tierra',
        debilidad: 'Dependiente de la tecnología',
        poderes: ['Armadura blindada', 'Volar', 'Láseres'],
        aliados: ['Spiderman'],
        enemigos: ['Mandarín'],
        creador: 'Nata'
    });

    await hero.save();
    console.log('Superhéroe insertado:', hero);
}/*
// Llama a la función para probarla
insertSuperHero2();
*/


async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 26 } }
    );
    console.log('Resultado de la actualización:', result);
}

// Llama a la función
updateSuperHero('Spiderman');


async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
}
// Llama a la función
/*deleteSuperHero('Thor');
deleteSuperHero('Thor');*/


async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}
// Llama a la función
findSuperHeroes();

