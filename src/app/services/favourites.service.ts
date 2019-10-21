import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class FavouritesService {

    toggleFavourites(el: any, list: string[]): void {

        if (el.classList.contains('star') && el.tagName === 'SPAN') {
            let id: string = el.id;

            if (el.classList.contains('starred')) {

                el.classList.remove('starred');
                let index: number = list.indexOf(id);
                list.splice(index, 1);
                this.savefavouraites(list);

            } else {

                el.classList.add('starred');
                list.push(el.id);
                this.savefavouraites(list);

            }
        }
    }

    getFavourites(): any {
        let arr = JSON.parse(sessionStorage.getItem('favourites'));
        return arr;

    }

    savefavouraites(list: string[]): void {
        sessionStorage.setItem('favourites', JSON.stringify(list));
    }

   /* setFavourites(list): void {
        if (this.getFavourites() !== null) {
            list = JSON.parse(sessionStorage.getItem('favourites'))
        } else {
            list = [];
        }
    }*/
}