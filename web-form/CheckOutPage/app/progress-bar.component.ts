import {
    Component
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-progress",
    templateUrl: "progress-bar.component.html",
    styleUrls: ["progress-bar.component.css"]
})

export class ProgressComponent {
    currentState: number = 0;

    visit(n: number): void {
        var backgrounds = document.getElementById("bar").querySelectorAll(".progress");
        var i = this.currentState, j = backgrounds.length;
        if (i == n) { return; }
        if (i < n) {
            backgrounds[++i].classList.add("visited");
            var interval = setInterval(function () {
                if (i > n) {
                    clearInterval(interval);
                } else {
                    backgrounds[i++].classList.add("visited");
                }
            }, 300);
        }
        if (i > n) {
            backgrounds[i--].classList.remove("visited");
            var interval = setInterval(function () {
                if (i == n) {
                    clearInterval(interval);
                } else {
                    backgrounds[i--].classList.remove("visited");
                }
            }, 300);
        }
        this.currentState = n;
    }
}