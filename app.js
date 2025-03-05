/*const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saacrist:r4KmR892vRyCZ4AS@cursadanodejs.ls9ii.mongodb.net/Node-js')

.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar MongoDB:', error));

*/

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://saacrist:r4KmR892vRyCZ4AS@cluster0.fwn9m.mongodb.net/supersuperHeroes')
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
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Iron Man'],
        enemigos: ['Duende Verde'],
        creador: 'Nata'
    });

    await hero.save();
    console.log('Superhéroe insertado:', hero);
}
// Llama a la función para probarla
insertSuperHero();

async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 30 } }
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
deleteSuperHero('Spiderman');


async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}
// Llama a la función
findSuperHeroes();

