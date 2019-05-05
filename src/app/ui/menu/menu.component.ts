import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
    @Input() items: { title: string }[];

    @Output() itemChoosen = new EventEmitter<string>();

    onChoose(item: string) {
        this.itemChoosen.emit(item);
    }
}
