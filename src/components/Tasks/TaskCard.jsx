/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import UpdateTaskModal from "../pages/UpdateTaskModal/UpdateTaskModal";
import { useParams } from "react-router-dom";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../slices/tasksApiSlice";

const TaskCard = ({ singleTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  //   const { _id, taskName, description, dueDate } = singleTask;
  const [updateTask, { isLoading: updateLoading }, refetch] =
    useUpdateTaskMutation();
  const [deleteTask, { isLoading: loadingDelete }] = useDeleteTaskMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteTask(id);
        refetch();
      } catch (err) {
        alert(err?.data?.message || err.error);
      }
    }
  };
  const handleTaskUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTask({
        taskId: singleTask._id,
        taskName: name,
        description,
        dueDate,
      }).unwrap();
      refetch();
      alert("Update successfully");
    } catch (err) {
      alert(err?.data?.message || err.error);
    }
  };
  return (
    <div className='border p-[20px]'>
      <h2>Task Name: {singleTask.taskName}</h2>
      <p>Description : {singleTask.description}</p>
      <p>Due Date : {singleTask.dueDate}</p>
      <button
        onClick={() => setShowModal(true)}
        className='p-2 mt-5 rounded-md bg-green-600 text-white'
      >
        Update
      </button>
      <button
        onClick={() => deleteHandler(singleTask._id)}
        className='p-2 rounded-md bg-green-600 text-white ml-3'
      >
        Delete
      </button>
      {showModal ? (
        <UpdateTaskModal
          key={singleTask._id}
          setShowModal={setShowModal}
          task={singleTask}
          handleTaskUpdate={handleTaskUpdate}
          setName={setName}
          setDescription={setDescription}
          setDueDate={setDueDate}
        ></UpdateTaskModal>
      ) : null}
    </div>
  );
};

export default TaskCard;
