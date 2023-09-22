/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useCreateTaskMutation } from "../../slices/tasksApiSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTask = () => {
  const [createTask, { isLoading: loadingCreate }] = useCreateTaskMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await createTask({
        taskName: name,
        description,
        dueDate,
      }).unwrap();
      toast("Added Successfully")
      navigate('/')
    } catch (err) {
      alert(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <>
        <nav>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
        </nav>
        <div className='flex justify-center items-center overflow-x-hidden overflow-y-hidden  outline-none focus:outline-none'>
          <div className='relative  my-6 mx-auto w-1/2'>
            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
              <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                <h3 className='text-3xl font-semibold'>Add Task </h3>
              </div>
              <div className='relative p-6 flex-auto mx-auto'>
                <form onSubmit={handleCreateTask}>
                  <div className='grid grid-cols-1 gap-3 mb-3'>
                    <input
                      className='input input-bordered w-full max-w-xs'
                      name='taskName'
                      placeholder='Enter Task name'
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      type='text'
                      name='description'
                      placeholder='Enter Description'
                      className='input input-bordered w-full max-w-xs'
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                      type='text'
                      name='dueDate'
                      placeholder='Enter Due Date'
                      className='input input-bordered w-full max-w-xs'
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <input
                      className='input input-bordered w-full max-w-xs cursor-pointer bg-green-600 p-2 rounded-md text-white font-semibold'
                      type='submit'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AddTask;
