import { Meteor } from 'meteor/meteor';
import { TasksCollection } from './TasksCollection';

Meteor.methods({

  async 'tasks.reorder'(taskIds) {

    for (let i = 0; i < taskIds.length; i++) {

      await TasksCollection.updateAsync(
        taskIds[i],
        {
          $set: {
            order: i
          }
        }
      );

    }

  }

});