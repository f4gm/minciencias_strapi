const path = require('path');
const Service = require('node-windows').Service;

const svc = new Service({
  name: 'minciencias-strapi',
  description: 'Servicio para iniciar Strapi de minciencias.',
  script: path.join(__dirname, 'start-strapi.js'),
  logpath: path.join(__dirname, 'servicelog')
});

svc.on('install', function() {
  console.log('Installing service...');
  svc.start();
});


svc.on('uninstall', function() {
  console.log('Uninstalling service...');
  svc.uninstall();
});

svc.on('error', function(error) {
  console.error("Error");
  console.error(error);
})

// svc.install();
const args = process.argv;

if (args[2] == 'install') {
  svc.install();
} else if (args[2] == 'uninstall') {
  svc.uninstall();
} else {
  console.log('Enter a valid action: install, uninstall.')
}