import { API_URL } from './utils';

export const CreateTask = async (taskObj) => {
    const url = `${API_URL}/tasks`;
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskObj),
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error('CreateTask Error:', err);
        return { success: false, message: 'Failed to create task' };
    }
};

export const GetAllTasks = async () => {
    const url = `${API_URL}/tasks`;
    try {
        const result = await fetch(url);
        const data = await result.json();
        console.log('GetAllTasks Response:', data);
        return data;
    } catch (err) {
        console.error('GetAllTasks Error:', err);
        return { success: false, message: 'Failed to fetch tasks', data: [] };
    }
};

export const DeleteTaskById = async (id) => {
    const url = `${API_URL}/tasks/${id}`;
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error('DeleteTask Error:', err);
        return { success: false, message: 'Failed to delete task' };
    }
};

export const UpdateTaskById = async (id, reqBody) => {
    const url = `${API_URL}/tasks/${id}`;
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody),
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error('UpdateTask Error:', err);
        return { success: false, message: 'Failed to update task' };
    }
};
