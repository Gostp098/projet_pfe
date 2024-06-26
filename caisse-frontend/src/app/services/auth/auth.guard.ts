import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';

@Injectable()
export class AppAuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override router: Router,
    protected override keycloakAngular: KeycloakService
  ) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
    let permission;

    /*if (!route.data.requiresAuth) {
      console.log(route.data.requiresAuth)
      return resolve(true); // Allow unauthenticated access
    }*/
     if (!this.authenticated) {
        this.keycloakAngular.login().catch((e) => console.error(e));
        return reject(false);
      }
      const excludedUrls: string[] = ['/account/login', '/public-url']; 

      const currentUrl = state.url;
      if (excludedUrls.some(url => currentUrl.includes(url))) {
        return resolve(true); 
      }

      const requiredRoles: string[] = route.data['roles'];
      if (!requiredRoles || requiredRoles.length === 0) {
        permission = true;
      } else {
        if (!this.roles || this.roles.length === 0) {
        permission = false
        }
        if (requiredRoles.some(x => this.roles.includes(x)))
        {
            permission=true;
        } else {
            permission=false;
        };
      }
      if(!permission){
          this.router.navigate(['/']);
      }
      resolve(permission)
    });
  }
}
