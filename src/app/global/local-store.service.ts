import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStoreService {
    keepData(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    getData(key: string): string {
        return localStorage.getItem(key);
    }

    has(key: string): boolean {
        return !!localStorage.getItem(key);
    }
}
