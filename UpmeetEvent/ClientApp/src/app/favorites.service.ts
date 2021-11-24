import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthorizeService } from '../api-authorization/authorize.service';
import { Favorites } from './Favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private authorize_Service:AuthorizeService) {

  }

  GetAllFavorites(): any {
    return this.http.get(this.baseUrl + `api/Favorites/allFavorites`);
  }

  PostFavorites(eventId: number): any {


    return this.http.post(this.baseUrl + `api/Favorites/addFavorite?event_Id=${eventId}`, {});
    
  }

  RemoveFavorites(id: number): any {
    return this.http.delete(this.baseUrl + `api/Favorites/deleteFavorite?id=${id}`, {});
  }
}
