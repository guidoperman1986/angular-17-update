import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ReqRes } from '../interfaces/req-res.interface';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  http = inject(HttpClient);
  people = toSignal(this.getReqRes());

  constructor() {
  }

  getReqRes() {
    return this.http.get<ReqRes>('https://reqres.in/api/users?page=1')
      .pipe(
        map((response: ReqRes) => ({
          people: response.data,
          total: response.total,
          total_pages: response.total_pages
        }))
      )
  }
}
