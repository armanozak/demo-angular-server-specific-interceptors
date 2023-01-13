import { HttpContextToken } from '@angular/common/http';

export const IS_JSON_PLACEHOLDER = new HttpContextToken<boolean>(() => false);