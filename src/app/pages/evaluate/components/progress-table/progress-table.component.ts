import {Component, Input, OnInit} from '@angular/core';
import {Progress} from '../../../../shared/models/progress.model';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss']
})
export class ProgressTableComponent implements OnInit {
  @Input('teamProgress') teamsProgress: Progress[];

  constructor() {
  }

  ngOnInit(): void {
  }


}
