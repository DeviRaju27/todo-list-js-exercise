
const newTask = function(title, desc) {
  const task = {
    title: title,
    desc: desc,
    complete: false,
    logTaskState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      task.complete = true;
    }
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", 'ahhh not again');
const task2 = newTask("Do Laundry", "Nope");
const tasks = [task1, task2];

task1.completeTask();
task1.logTaskState(); //Clean Cat Litter has been completed



