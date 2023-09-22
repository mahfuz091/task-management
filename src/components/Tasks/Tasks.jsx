import { useGetTasksQuery } from "../../slices/tasksApiSlice";
import TaskCard from "./TaskCard";


const Tasks = () => {
    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, error, refetch } = useGetTasksQuery();
    console.log(data);
    return (
        <div>
            <h2 className="text-center text-2xl">Tasks</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    data?.map((singleTask) => (<TaskCard key={singleTask._id} singleTask={singleTask} refetch={refetch}></TaskCard>))
                }
            </div>
        </div>
    );
};

export default Tasks;