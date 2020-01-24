import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Progress} from '../../../../shared/models/progress.model';
import {EvaluateService} from '../../services/evaluate.service';
import {AveragePathwayCompletionModel} from '../../../../shared/models/average-pathway-completion.model';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
  $teamProgress: Observable<Progress[]>;
  $averagePathwayCompletion: Observable<AveragePathwayCompletionModel[]>;

  constructor(private evaluateService: EvaluateService) {
  }

  ngOnInit() {
    this.$teamProgress = this.evaluateService.getTeamProgress();
    this.$averagePathwayCompletion = this.evaluateService.getAveragePathwayCompletion();
  }

}
