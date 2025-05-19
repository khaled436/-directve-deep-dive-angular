import {Directive, ElementRef, inject, input} from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)':'onLeavingSite($event)'
  }
})
export class SafeLinkDirective {

  queryParam = input('myapp',{alias: 'appSafeLink'});

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor() {
    console.log('safe link active');
  }

  onLeavingSite(event: MouseEvent){
    const   wantsToLeave = window.confirm('do you want to leave the site ?');
    const link = this.hostElementRef.nativeElement.href;
    this.hostElementRef.nativeElement.href = link + '?from=' + this.queryParam();
    if(wantsToLeave){
      return;
    }

    event.preventDefault();
  }
}
