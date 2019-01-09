import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Model } from './model';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ModelService {

  private modelesUrl = 'api/modeles';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET modeles from the server */
  getmodeles (): Observable<Model[]> {
    return this.http.get<Model[]>(this.modelesUrl)
      .pipe(
        tap(modeles => this.log('fetched modeles')),
        catchError(this.handleError('getmodeles', []))
      );
  }

  /** GET model by id. Return `undefined` when id not found */
  getmodelNo404<Data>(id: number): Observable<Model> {
    const url = `${this.modelesUrl}/?id=${id}`;
    return this.http.get<Model[]>(url)
      .pipe(
        map(modeles => modeles[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} model id=${id}`);
        }),
        catchError(this.handleError<Model>(`getmodel id=${id}`))
      );
  }

  /** GET model by id. Will 404 if id not found */
  getmodel(id: number): Observable<Model> {
    const url = `${this.modelesUrl}/${id}`;
    return this.http.get<Model>(url).pipe(
      tap(_ => this.log(`fetched model id=${id}`)),
      catchError(this.handleError<Model>(`getmodel id=${id}`))
    );
  }

  /* GET modeles whose name contains search term */
  searchmodeles(term: string): Observable<Model[]> {
    if (!term.trim()) {
      // if not search term, return empty model array.
      return of([]);
    }
    return this.http.get<Model[]>(`${this.modelesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found modeles matching "${term}"`)),
      catchError(this.handleError<Model[]>('searchmodeles', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new model to the server */
  addmodel (model: Model): Observable<Model> {
    return this.http.post<Model>(this.modelesUrl, model, httpOptions).pipe(
      tap((model: Model) => this.log(`added model w/ id=${model.modelId}`)),
      catchError(this.handleError<Model>('addmodel'))
    );
  }

  /** DELETE: delete the model from the server */
  deletemodel (model: Model | number): Observable<Model> {
    const id = typeof model === 'number' ? model : model.modelId;
    const url = `${this.modelesUrl}/${id}`;

    return this.http.delete<Model>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted model id=${id}`)),
      catchError(this.handleError<Model>('deletemodel'))
    );
  }

  /** PUT: update the model on the server */
  updatemodel (model: Model): Observable<any> {
    return this.http.put(this.modelesUrl, model, httpOptions).pipe(
      tap(_ => this.log(`updated model id=${model.modelId}`)),
      catchError(this.handleError<any>('updatemodel'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a modelService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`modelService: ${message}`);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
