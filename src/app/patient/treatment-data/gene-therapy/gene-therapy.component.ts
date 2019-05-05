import {
    Component,
    OnInit,
    ViewChildren,
    QueryList,
    AfterViewInit,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-gene-therapy',
    templateUrl: './gene-therapy.component.html',
    styleUrls: ['./gene-therapy.component.css'],
})
export class GeneTherapyComponent {
    @ViewChildren('virus') viruses: QueryList<ElementRef>;
}
