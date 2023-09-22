/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import UpdateTaskModal from "../pages/UpdateTaskModal/UpdateTaskModal";

import {
  useDeleteTaskMutation,

} from "../../slices/tasksApiSlice";
import { toast } from "react-toastify";

const TaskCard = ({ singleTask, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [dueDate, setDueDate] = useState("");

  // useEffect(() => {
  //   if (singleTask) {
  //     setName(singleTask.taskName);
  //     setDescription(singleTask.description);
  //     setDueDate(singleTask.dueDate);

  //   }
  // }, [singleTask]);


  //   const { _id, taskName, description, dueDate } = singleTask;


  const [deleteTask, { isLoading: loadingDelete }] = useDeleteTaskMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteTask(id);

        toast("Delete Success");
        refetch();


      } catch (err) {
        toast(err?.data?.message || err.error);

      }
    }
  };
  // const handleTaskUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await updateTask({
  //       taskId: singleTask._id,
  //       taskName: name,
  //       description,
  //       dueDate,
  //     }).unwrap();

  //     toast("Update successfully");
  //     setShowModal(false);
  //     refetch();
  //   } catch (err) {
  //     toast(err?.data?.message || err.error);

  //   }
  // };
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
        // handleTaskUpdate={handleTaskUpdate}
        // setName={setName}
        // setDescription={setDescription}
        // setDueDate={setDueDate}
        ></UpdateTaskModal>
      ) : null}
    </div>
  );
};

export default TaskCard;
