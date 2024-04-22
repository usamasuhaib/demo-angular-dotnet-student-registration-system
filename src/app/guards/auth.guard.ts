import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router)
  let isloggedIn=localStorage.getItem("token");
  if(!isloggedIn){
    alert('please login first, redirecting to login page.....')
    _router.navigate(['login']);

  }


  return true;
};
