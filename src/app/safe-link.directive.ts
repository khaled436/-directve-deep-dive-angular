import {Directive} from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)':'onLeavingSite($event)'
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('safe link active');
  }

  onLeavingSite(event: MouseEvent){
    const   wantsToLeave = window.confirm('do you want to leave the site ?');
    if(wantsToLeave){
      return;
    }

    event.preventDefault();
  }
}
