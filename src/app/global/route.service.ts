import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RouteService {
    curPath$ = new BehaviorSubject<string>('');

    constructor(private router: Router, private location: Location) {
        this.router.events
            .pipe(filter(e => e instanceof RouterEvent))
            .subscribe(_ => {
                if (this.location.path().indexOf('patient') !== -1) {
                    this.curPath$.next('patient');
                } else if (this.location.path().indexOf('doctor') !== -1) {
                    this.curPath$.next('doctor');
                }
            });
    }

    get path$() {
        return this.curPath$.asObservable();
    }
}
