import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";

export class CanDectivateGuardService implements CanDeactivate<ContactComponent>{
    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
      return  component.canExit();
    }
        
    }
