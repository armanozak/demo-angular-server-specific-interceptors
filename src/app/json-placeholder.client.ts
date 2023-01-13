import { HttpClient, HttpContext, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IS_JSON_PLACEHOLDER } from './http-contexts';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderClient extends HttpClient {
  override request(
    first: string | HttpRequest<any>,
    url?: string,
    options: RequestOptions = {}
  ): Observable<any> {
    if (typeof first === 'string') {
      this.#setPlaceholderContext(options);
      return super.request(first, url, options);
    }

    this.#setPlaceholderContext(first);
    return super.request(first);
  }

  #setPlaceholderContext(optionsOrRequest: { context?: HttpContext }) {
    optionsOrRequest.context ??= new HttpContext();
    optionsOrRequest.context.set(IS_JSON_PLACEHOLDER, true);
  }
}

type RequestOptions = Parameters<HttpClient['request']>[2];
