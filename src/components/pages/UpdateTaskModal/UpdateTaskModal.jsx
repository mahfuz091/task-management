/* eslint-disable react/prop-types */


const UpdateTaskModal = ({ task, setShowModal, handleTaskUpdate }) => {
    return (
        <>
            <>
                <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                    <div className='relative  my-6 mx-auto w-1/2'>
                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                            <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                                <h3 className='text-3xl font=semibold'>Update Toy </h3>
                                <button
                                    className='bg-transparent border-0 text-black text-right'
                                    onClick={() => setShowModal(false)}
                                >
                                    <span>Close</span>
                                </button>
                            </div>
                            <div className='relative p-6 flex-auto mx-auto'>
                                <form onSubmit={handleTaskUpdate}>


                                    <div className='grid grid-cols-1 gap-3 mb-3'>
                                        <input
                                            className='input input-bordered w-full max-w-xs'
                                            name="taskName"
                                            placeholder='Enter Task name'
                                            defaultValue={task.taskName}
                                        />

                                        <input
                                            type='text'
                                            name="description"
                                            placeholder='Enter Description'
                                            className='input input-bordered w-full max-w-xs'
                                        />
                                        <input
                                            type='text'
                                            name="dueDate"
                                            placeholder='Enter Due Date'
                                            className='input input-bordered w-full max-w-xs'
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
                            <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                                <button
                                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                                    type='button'
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default UpdateTaskModal;