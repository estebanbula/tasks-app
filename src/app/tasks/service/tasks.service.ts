import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task.interface";
import {environments} from "../../../env/env";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl: string = environments.baseUrl;

  constructor(private _httpClient: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    const params: HttpParams = new HttpParams().set('state', 'A');
    return this._httpClient.get<Task[]>(`${this.baseUrl}/tasks`, {params});
  }

  public saveTask(task: Task): Observable<Task> {
    return this._httpClient.post<Task>(`${this.baseUrl}/tasks`, task);
  }

  public deleteTask(id: string): Observable<Task> {
    return this._httpClient.delete<Task>(`${this.baseUrl}/tasks/${id}`);
  }

  public editTask(id: string, task: Task): Observable<Task> {
    return this._httpClient.put<Task>(`${this.baseUrl}/tasks/${id}`, task);
  }

  public taskById(id: string): Observable<Task> {
    return this._httpClient.get<Task>(`${this.baseUrl}/tasks/${id}`);
  }
}
