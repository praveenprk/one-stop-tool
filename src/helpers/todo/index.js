export const handleAdd = (e) => {
  e.preventDefault();
  // console.log(`task`, task);
  const updateTask = [
    ...allTasks,
    {
      name: task,
      type: "work"
    }
  ];
  setAllTasks(updateTask);
}
