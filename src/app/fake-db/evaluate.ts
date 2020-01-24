import {Progress} from '../shared/models/progress.model';
import {AveragePathwayCompletionModel} from '../shared/models/average-pathway-completion.model';

export class Evaluate {

  public static teamProgressData: Progress[] = [
    {percent: 85, description: 'Linked their Pharmacy Profiles account'},
    {percent: 73, description: 'Completed the Evaluate step'},
    {percent: 64, description: 'Analyzed their goals'},
    {percent: 55, description: 'Built their Plan'},
    {percent: 15, description: 'Completed their Plan'},
    {percent: 10, description: 'Self-reflected and applied what they’ve learned'}
  ];
  public static averagePathwayCompletion: AveragePathwayCompletionModel[] = [
    {title: 'Pathway 1 - APhA Immunization Pathway', average: 36.7, usersNumber: 1214},
    {title: 'Pathway 2 - APhA Immunization Pathway', average: 69.7, usersNumber: 1516},
    {title: 'Pathway 3 - APhA Immunization Pathway', average: 96.7, usersNumber: 1317}
  ];

}
