import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { throwError } from 'rxjs';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => throwError(() => err));
