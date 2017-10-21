import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
    {
        id: 1,
        title: "Build Kanban board app",
        description: "My React KanbanBoard",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code the Kanban application",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];

ReactDOM.render( <KanbanBoard cards={cardsList} / > , document.getElementById("root"));