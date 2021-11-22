import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  GetAllFavorites(): any {
    return this.http.get(this.baseUrl + `api/allFavorites`);
  }

  PostFavorites(): any {
    return this.http.post(this.baseUrl + `api/addFavorite`, {});
  }

  RemoveFavorites(id: string): any {
    return this.http.delete(this.baseUrl + `api/deleteFavorite?id=${id}`);
  }
}
