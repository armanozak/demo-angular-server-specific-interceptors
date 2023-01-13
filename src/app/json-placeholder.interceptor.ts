import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { IS_JSON_PLACEHOLDER } from './http-contexts';

export const interceptJsonPlaceholder = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (!req.context.get(IS_JSON_PLACEHOLDER)) return next(req);

  const cloneReq = req.clone({
    url: 'https://jsonplaceholder.typicode.com' + req.url,
  });

  return next(cloneReq);
};
