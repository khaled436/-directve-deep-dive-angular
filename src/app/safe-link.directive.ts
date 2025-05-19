import {Directive, input} from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)':'onLeavingSite($event)'
  }
})
export class SafeLinkDirective {

  queryParam = input('myapp',{alias: 'appSafeLink'});

  constructor() {
    console.log('safe link active');
  }

  onLeavingSite(event: MouseEvent){
    const   wantsToLeave = window.confirm('do you want to leave the site ?');
    const link = (event.target as HTMLAnchorElement).href;
    (event.target as HTMLAnchorElement).href = link + '?from=' + this.queryParam();
    if(wantsToLeave){
      return;
    }

    event.preventDefault();
  }
}
