import Controller from '@ember/controller';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking'

export default class ApplicationController extends Controller {
  @tracked doingSomething;
  @tracked doneOnce;

  @action
  doSomething() {
    this.doingSomething = true;
    later(() => {
      this.doingSomething = false;
      this.doneOnce = true;
    }, 2000);
  }
}
