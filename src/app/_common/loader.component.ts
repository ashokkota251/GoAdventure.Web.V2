import { Component } from '@angular/core';

@Component({
    selector: 'loader',
    template: `<div class="modal-dialog">
                <div class="modal-content" style="background: transparent !important;border: none !important;">
                   <div class="modal-body">
                        <img src="../../../../../assets/GALoader.gif" style="position: absolute;top: 40%;left: 44%;width: 160px;"/>
                    </div>
                </div>
             </div>`,
    styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
    closeResult: string;
}
