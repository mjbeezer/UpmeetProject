import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Favorites } from './Favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  GetAllFavorites(): any {
    return this.http.get(this.baseUrl + `api/Favorites/allFavorites`);
  }

  PostFavorites(F: Favorites): any {
    return this.http.post(this.baseUrl + `api/Favorites/addFavorite`, {});
  }

  RemoveFavorites(id: number): any {
    return this.http.delete(this.baseUrl + `api/Favorites/deleteFavorite?id=${id}`);
  }
}
