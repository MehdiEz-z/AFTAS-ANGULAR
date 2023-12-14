import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class LevelListService implements Resolve<any>{
  public rows: any;
  public onLevelListChanged: BehaviorSubject<any>;
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onLevelListChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.apiUrl + 'niveau/').subscribe((response: any) => {
        this.rows = response;
        this.onLevelListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }

}
