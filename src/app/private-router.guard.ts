import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouterGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user') || '');
  if (user.user.id !== 2) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
