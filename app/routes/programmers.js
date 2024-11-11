import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  //creating the model
  model() {
    return ['Ada Lovelace', 'Grace Hopper', 'Alan Turing'];
  }
}