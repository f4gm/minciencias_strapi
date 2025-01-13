const path = require('path');
const Service = require('node-windows').Service;

const svc = new Service({
  name: 'minciencias-strapi',
  description: 'Servicio para iniciar Strapi de minciencias.',
  script: path.join(__dirname, 'start-strapi.js'),
  logpath: path.join(__dirname, 'servicelog')
});

svc.on('install',function(){
  svc.start();
});


svc.on('uninstall', function() {
  svc.uninstall();
});

svc.on('error', function(error) {
  console.error("Error");
  console.error(error);
})

svc.install();