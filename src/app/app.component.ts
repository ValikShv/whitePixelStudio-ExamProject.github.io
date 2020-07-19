import { Component } from '@angular/core';
// import {} from '';
export interface Info {
  name: string
  main: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WhitePixelStudio-ExamProject';
}
