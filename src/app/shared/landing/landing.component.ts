import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../core/http/http-request.service';
/**
 *
 *
 * @export
 * @class LandingComponent
 */
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  public isSidebarActive = false;
  public isContainerActive = false;

  public constructor(private _http: HttpRequestService) { }
  ngOnInit(): void {
      console.log("LandingComponent");
      this._http.get("/test").subscribe((res) => {
        console.log(res);
      });
  }

  /**
   * @function sidebarToggleClass
   * @description Sidebar ToggleClass function
   * */
  public sidebarToggleClass() {
      this.isSidebarActive = !this.isSidebarActive;
      this.isContainerActive = !this.isContainerActive;
  }

}
