import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserInputService {
    searchText: string = '';
    initRoute: any = ''
}