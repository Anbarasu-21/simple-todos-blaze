import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import '/imports/api/tasksMethods';

const insertTask = (taskText) =>
  TasksCollection.insertAsync({ text: taskText });

Meteor.startup(async () => {
  const count = await TasksCollection.find().countAsync();

  if (count === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask);
  }
});