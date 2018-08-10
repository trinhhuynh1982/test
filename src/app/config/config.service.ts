import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
  
  configUrl = "assets/config.json";
  
  constructor(
    private http: HttpClient
  ) { }
  
  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, {observe: 'response'}
    );
  }
}
