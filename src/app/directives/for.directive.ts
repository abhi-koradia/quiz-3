import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]', // Use *appFor as structural directive
  standalone: true
})
export class ForDirective {
  @Input() set appForOf(items: any[]) {
    this.viewContainer.clear(); // Clear any existing views
    items.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item, // Expose the item as $implicit
        index: index     // Expose the index to the template
      });
    });
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
