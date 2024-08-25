tasks = []  # Our list to store tasks

def add_task():
  """Adds a new task to the todo list."""
  task_description = input("Enter task description: ")
  tasks.append({"description": task_description, "completed": False})
  print("Task added!")

def view_tasks():
  """Displays all tasks in the todo list."""
  if not tasks:
    print("Your todo list is empty.")
    return

  print("Your Todo List:")
  for index, task in enumerate(tasks):
    status = "Completed" if task["completed"] else "Pending"
    print(f"{index+1}. {task['description']} ({status})")

def mark_complete():
  """Marks a task as completed."""
  view_tasks()
  if not tasks:
    return

  task_index = int(input("Enter the number of the task to mark complete: ")) - 1
  if 0 <= task_index < len(tasks):
    tasks[task_index]["completed"] = True
    print("Task marked as complete!")
  else:
    print("Invalid task number.")

def remove_task():
  """Removes a task from the todo list."""
  view_tasks()
  if not tasks:
    return

  task_index = int(input("Enter the number of the task to remove: ")) - 1
  if 0 <= task_index < len(tasks):
    del tasks[task_index]
    print("Task removed!")
  else:
    print("Invalid task number.")

while True:
  print("\nTodo List App")
  print("1. Add Task")
  print("2. View Tasks")
  print("3. Mark Complete")
  print("4. Remove Task")
  print("5. Exit")

  choice = input("Enter your choice: ")

  if choice == '1':
    add_task()
  elif choice == '2':
    view_tasks()
  elif choice == '3':
    mark_complete()
  elif choice == '4':
    remove_task()
  elif choice == '5':
    print("Exiting...")
    break
  else:
    print("Invalid choice. Please try again.")
