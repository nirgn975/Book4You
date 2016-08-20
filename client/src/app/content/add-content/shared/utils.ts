import { Injectable } from "@angular/core";
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class Utils {

  constructor(
    private router: Router) {}

  /**
   * Get the id from a category URL.
   */
  getCategoryId(url: string) {
    return url.split('/').slice(-1)[0];
  }

  /**
   *
   */
  callback(data: Response) {
    if (data.ok) {
      this.router.navigate(['']);
      location.reload();
    } else {
      alert("Something went wrong, please try again.");
    }
  }
}
