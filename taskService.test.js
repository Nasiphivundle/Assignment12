
const TaskService = require('../../services/taskService');

describe('Task Service Tests', () => {
  let service;

  beforeEach(() => {
    service = new TaskService();
  });

  test('Create Task', () => {
    const task = { title: 'Assignment', completed: false };
    service.createTask(task);

    expect(service.getTasks().length).toBe(1);
  });

  test('Delete Task', () => {
    const task = { title: 'Test Task' };
    service.createTask(task);

    service.deleteTask(0);

    expect(service.getTasks().length).toBe(0);
  });
});