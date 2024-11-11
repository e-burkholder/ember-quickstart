import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  //creating the model
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}
