/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import UpdateTaskModal from "../pages/UpdateTaskModal/UpdateTaskModal";
import { useUpdateTaskMutation } from "../../slices/tasksApiSlice";


const TaskCard = ({ singleTask }) => {
    const [showModal, setShowModal] = useState(false);
    const { _id, taskName, description, dueDate } = singleTask;
    const [updateTask, { isLoading: updateLoading }, refetch] = useUpdateTaskMutation();
    const handleTaskUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateTask({
                taskId,

            }).unwrap();
            refetch();
            alert.success('Review created successfully');
        } catch (err) {
            alert.error(err?.data?.message || err.error);
        }
    };
    return (
        <div className="border p-[20px]">
            <h2>Task Name: {taskName}</h2>
            <p>Description : {description}</p>
            <p>Due Date : {dueDate}</p>
            <button onClick={() => setShowModal(true)} className="p-2 mt-5 rounded-md bg-green-600 text-white">Update</button>
            <button className="p-2 rounded-md bg-green-600 text-white ml-3">Delete</button>
            {showModal ? (
                <UpdateTaskModal
                    key={_id}
                    setShowModal={setShowModal}
                    task={singleTask}
                    handleTaskUpdate={handleTaskUpdate}
                ></UpdateTaskModal>
            ) : null}
        </div>
    );
};

export default TaskCard;