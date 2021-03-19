import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HomesResolved } from '../home/home';
import { HomeService } from '../services/home.service';

@Injectable({
  providedIn: 'root'
})
export class HomesResolverService implements Resolve<HomesResolved> {

  constructor(private homeService: HomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomesResolved> {
    return this.homeService.getHomes()
      .pipe(
        map(homes => ({ homes: homes })),
        catchError(error => {
          const mssg = `No house`;
          console.log(mssg);
          return of({ homes: null, error: mssg });
        })
      )
  }
}
