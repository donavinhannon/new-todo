import {enterListeners, getInputs} from 'utils';
import{Observable} from 'observable';

export class List {
    constructor(title, tags) {
        this.key = Date.now().toString();
        this.title = title;
        this.tags = tags.replace(/\s*,\s*/, ',').split(',');
        this.tasks = [];
    }
}

export class AddListComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.button = document.getElementById('create-list');
        this.template =
        '';

        const btnClick = new Observable();
        btnClick.subscribe(this.addList());
    }

    addList() {
        const inputs = getInputs(this.btn.id);
        this.list = new List(inputs[0].value, inputs[1].value);
        console.log(`List: ${this.list}`); // eslint-disable-line no-console
        localStorage.setItem(this.key, JSON.stringify(this.list));
    }

}

export class NavListComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.template =
        '';

        // Listen for updates to notes from other windows.
        window.addEventListener('storage', ev => {
            this.list = JSON.parse(localStorage.getItem(ev.key));
            console.log(`Updated list: ${ev.key} from ${ev.oldValue} to ${ev.newValue}`); // eslint-disable-line no-console
        });
    }
}

export class AllListsComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.template =
        '';

        const storage = new Observable();
        storage.subscribe(this.updateList);
    }

    updateList(ev) {
        this.list = JSON.parse(localStorage.getItem(ev.key));
        console.log(`Updated list: ${ev.key} from ${ev.oldValue} to ${ev.newValue}`); // eslint-disable-line no-console

    }

    getLists() {
    }
}

export class TodoListComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.button = document.getElementById('add-task');
        this.template =
        '';
    }
}

export class AddTaskComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.template =
        '';
    }

    addTask(task) {
        this.list.tasks.unshift(task);
        JSON.stringify(localStorage.setItem(this.list.key.tasks, this.tasks));
    }

}

export class Tasks {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
}

export class TasksComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.template =
        '';
    }

    getTasks() {

    }

    divToInput() {

    }
}

class AppComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.declarations = [
            AddListComponent,
            NavListComponent,
            TodoListComponent
        ];
        this.init = () => {
            for (let i = 0; i < this.declarations.length; i++) {
                new this.declarations[i]();
            }
        };
        this.template =
        '';

        enterListeners('input-text');
    }
}
