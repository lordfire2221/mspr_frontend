import { HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processus } from '../models/processus';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://oxarian.fr:5000';
  constructor(private _http: HttpClient) {
  }

  createProfil(info:any){
    return this._http.post(`${this.apiUrl}/Register_profil`,info,{reportProgress:true,observe:'events'})
  }
  ModifiProfil(id : string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<any>(`${this.apiUrl}/Modification_Profil`,{headers})
  }
  ModifiLevel(id : string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<any>(`${this.apiUrl}/Modification_Niveau`,{headers})
  }
  ModifiValidity(id : string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<any>(`${this.apiUrl}/Modifiaction_Validity`,{headers})
  }

  Verif_email(email : string) : Observable <any> {
     return this._http.get<any>(`${this.apiUrl}/Verif_email/${email}`)
  }

  getRessources():Observable<any>{
    return this._http.get(`${this.apiUrl}/system-resources`);
  }

  getNetwork():Observable<any>{
    return this._http.get(`${this.apiUrl}/reach_network`);
  }

  get_informations_network(interfaces: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/informations_network?interface=${interfaces}`);
  }

  get_headers_http_scan(url: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/get_headers_http?url=${url}`);
  }

  // getProccessus() : Observable <Processus[]> {
  //    return this._http.get<Processus[]>(`${this.apiUrl}/running-processes`);
  // }

  getProccessus(page: number = 1, pageSize: number = 10): Observable<Processus[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this._http.get<Processus[]>(`${this.apiUrl}/running-processes`, { params });
  }

  getLogs():Observable<any>{
   return this._http.get(`${this.apiUrl}/logs`)
  }

  getAll_Users():Observable<any>{
    return this._http.get(`${this.apiUrl}/all_users`)
  }
  getScan_port():Observable<any>{
    return this._http.get(`${this.apiUrl}/scan-ports`)
  }

  verif_password(info:any){
    return this._http.post(`${this.apiUrl}/password`,info,{reportProgress:true,observe:'events'})
  }
  scan_nmap(info:any){
    return this._http.post(`${this.apiUrl}/nmap_scan`,info,{reportProgress:true,observe:'events'})
  }
  verif_ip(info:any){
    return this._http.post(`${this.apiUrl}/verif_ip`,info,{reportProgress:true,observe:'events'})
  }


}
