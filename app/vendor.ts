import 'es6-shim/es6-shim';
import 'es6-promise/dist/es6-promise';
import 'zone.js/dist/zone.js';
import 'reflect-metadata';
import 'systemjs/dist/system';
import '@angular/compiler';
import '@angular/platform-browser';

var System: any;

if ('production' === 'BRUNCH_ENVIRONMENT') {
  
  System.import('@angular/core').then((ngCore) => {
    ngCore.enableProdMode();  
  });
}
