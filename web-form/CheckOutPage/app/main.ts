import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//bootstraping is platform specific
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);