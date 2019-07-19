import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  endpoint: string = environment.ApiURL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getAdminUserDetails(){
    return localStorage.getItem("adminUser");
  }

  get(apiMethodName: string): Observable<any> {
    return this.http.get(this.endpoint + apiMethodName).pipe(
      map(this.extractData));
  }

  getId(apiMethodName: string, id: number): Observable<any> {
    return this.http.get(this.endpoint + apiMethodName + '/' + id).pipe(
      map(this.extractData));
  }

  add(apiMethodName: string, product:any): Observable<any> {
    return this.http.post<any>(this.endpoint + apiMethodName, JSON.stringify(product), this.httpOptions).pipe();
  }

  addEvent(apiMethodName: string, fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + apiMethodName, formData);
  }

  update(id, product): Observable<any> {
    return this.http.put(this.endpoint + 'products/' + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  delete(apiMethodName: string, id: number): Observable<any> {
    return this.http.delete<any>(this.endpoint + apiMethodName + '/' + id, this.httpOptions).pipe();
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      //// TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      //// TODO: better job of transforming error for user consumption
      //console.log(`${operation} failed: ${error.message}`);

      //// Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
