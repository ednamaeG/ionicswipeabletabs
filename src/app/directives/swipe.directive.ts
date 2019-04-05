import { SwipeService } from "./../services/swipe.service";
import { Directive, ElementRef, Output, EventEmitter } from "@angular/core";
import { DirectivesModule } from "./../directives/directives.module";
@Directive({
 selector: "[swipeable-tab]"
})
export class SwipeDirective {
 element: HTMLElement;
 hammer: HammerManager;

 @Output()
 tapEvent: EventEmitter<string> = new EventEmitter();
 constructor(el: ElementRef, private swipeSvc: SwipeService) {
  this.element = el.nativeElement;
 }

 ngOnInit() {
  this.hammer = new Hammer.Manager(this.element);
  var swipe = new Hammer.Swipe();
  this.hammer.add([swipe]);

  this.hammer.on("swipeleft", (e) => {
   this.swipeSvc.switchNextTab();
  });

  this.hammer.on("swiperight", (e) => {
   console.log("right");
   this.swipeSvc.switchPrevTab();
  });
 }
}
