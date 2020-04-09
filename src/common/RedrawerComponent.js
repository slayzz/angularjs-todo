import { Subject } from 'rxjs';

export class RedrawerController {
  constructor($scope) {
    this.applyRedraw$ = new Subject();

    const subscription = this.applyRedraw$.subscribe(() => $scope.$apply());
    $scope.$on('destroy', () => {
      subscription.unsubscribe();
      this.applyRedraw$.complete();
    });
  }

  redraw() {
    this.applyRedraw$.next();
  }
}
