import { TASK_URL } from '../constants';
import { POSTTASK_URL } from '../constants';
import { UPDATE_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: TASK_URL,

            }),
            keepUnusedDataFor: 5,
            providesTags: ['Tasks'],
        }),
        getTaskDetails: builder.query({
            query: (taskId) => ({
                url: `${TASK_URL}/${taskId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        createTask: builder.mutation({
            query: (data) => ({
                url: `${POSTTASK_URL}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Task'],
        }),
        updateTask: builder.mutation({
            query: (data) => ({
                url: `${UPDATE_URL}/${data.taskId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Tasks'],
        }),

        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `${TASK_URL}/${taskId}`,
                method: 'DELETE',
            }),
            providesTags: ['Task'],
        }),


    }),
});

export const {
    useGetTasksQuery,
    useGetTaskDetailsQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = tasksApiSlice;