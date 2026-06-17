import { Template } from 'meteor/templating';
import { TasksCollection } from '../api/TasksCollection';
import { ReactiveDict } from 'meteor/reactive-dict';

import './App.html';
import './Task.js';
import Sortable from 'sortablejs';

const HIDE_COMPLETED_STRING = "hideCompleted";

Template.mainContainer.onRendered(function () {

    const el = this.find(".tasks");

    Sortable.create(el, {

        animation: 150,

        onEnd() {

            const ids = [];

            document
                .querySelectorAll(".tasks li")
                .forEach(li => {

                    ids.push(li.dataset.id);

                });

            Meteor.call(
                'tasks.reorder',
                ids
            );

        }

    });

});


Template.mainContainer.onCreated(function () {
    this.state = new ReactiveDict();
});

Template.mainContainer.events({

    'click #hide-completed-button'(event, instance) {

        const currentHideCompleted =
            instance.state.get(HIDE_COMPLETED_STRING);

        instance.state.set(
            HIDE_COMPLETED_STRING,
            !currentHideCompleted
        );

    }

});

Template.mainContainer.helpers({

    tasks() {

        const instance = Template.instance();

        const hideCompleted =
            instance.state.get(HIDE_COMPLETED_STRING);

        const hideCompletedFilter = {
            isChecked: { $ne: true }
        };

        return TasksCollection.find({}, {
            sort: {
                order: 1
            }
        }).fetch();

    },

    hideCompleted() {

        return Template.instance()
            .state
            .get(HIDE_COMPLETED_STRING);

    },

    incompleteCount() {

        const count =
            TasksCollection.find(
                {
                    isChecked: { $ne: true }
                }
            )
                .fetch()
                .length;

        return count ? `(${count})` : '';

    }

});

Template.form.events({
    async 'submit .task-form'(event) {

        event.preventDefault();

        const target = event.target;

        const text = target.text.value;
        const category = target.category.value;

        await TasksCollection.insertAsync({
            text,
            category,
            createdAt: new Date(),
            isChecked: false,
            order: Date.now()
        });

        target.text.value = '';

    }
});