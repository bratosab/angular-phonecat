import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';

import ajsApp from './app/app.module.ajs';
import config from './app/app.config.ajs';

config(ajsApp)

setAngularJSGlobal(angular)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
