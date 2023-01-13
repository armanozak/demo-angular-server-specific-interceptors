import './polyfills';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { interceptJsonPlaceholder } from './app/json-placeholder.interceptor';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([interceptJsonPlaceholder]))],
}).catch((err) => console.error(err));
