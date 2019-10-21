import { Component } from "@angular/core";
import {  UserInputService } from '../services/message.service';

@Component({
    selector: 'app-hd',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title: 'Mini-Netflix'
    constructor(public userInput: UserInputService) {
    }

}