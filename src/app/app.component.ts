import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { JsonPlaceholderClient } from './json-placeholder.client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: ` <div class="container p-3">{{ todo$ | async | json }}</div> `,
})
export class AppComponent {
  todo$ = inject(JsonPlaceholderClient).get('/todos/1');
}
