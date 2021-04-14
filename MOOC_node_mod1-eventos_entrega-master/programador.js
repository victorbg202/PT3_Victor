const EventEmitter = require("./events");

var event = new events.EventEmitter();

event.on('ideal', function(data) {
  console.log('Evento ideal() '+ data);
});

event.emit('ideal', 'Ejemplo de event emitter ');

var programaciones = [];
// Clase programador.
// Programar temperatura segun la hora. (Simula la programación de la temperatura de una habitación a una hora determinada.)
class Programador extends EventEmitter {

  constructor(program) {
    super();
    programaciones = program;
  }

  ideal() {
    const later = require("later");
    later.date.localTime();
    for(let i=0;i<programaciones.length;i++) {
      const sched = later.parse.text("at "+programaciones[i].hora);
      later.setInterval(() => this.emit(console.log(`Programando... ${programaciones[i].temperatura}ºC`)), sched);
    }
  }

  

}

exports = module.exports = Programador;
