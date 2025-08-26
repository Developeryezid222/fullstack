// filepath: src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Other necessary imports can be added here, 
// such as state management, global services, etc.
// For example, if using NgRx or similar, import and provide the store here.
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),
    provideRouter(routes) // <- muy importante para usar ActivatedRoute
  ] // Provide necessary services here
}).catch(err => console.error(err));