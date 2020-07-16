/// <reference path = "models/drag-drop.ts" />
/// <reference path = "models/project.ts" />
/// <reference path = "state/project-state.ts" />
/// <reference path = "util/validation.ts" />
/// <reference path = "decorators/autobind.ts" />
/// <reference path = "components/project-input.ts" />
/// <reference path = "components/project-list.ts" />



namespace App {






  

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");

  // projectState.addProject('title01', 'desc01',  1);
  // projectState.addProject('title02', 'desc02', 2);
  // projectState.addProject('title03', 'desc03', 3);
}
