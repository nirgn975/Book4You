import { Response } from '@angular/http';
import { Router } from '@angular/router';

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
    console.log(data);
    if (data.ok) {
      this.router.navigate(['']);
    } else {
      alert("Something went wrong, please try again.");
    }
  }
}