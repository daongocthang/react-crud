import { useEffect, useState } from 'react';
import { taskService } from '~/services';

export default function ListTask() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        listTasks();
    }, []);

    const listTasks = async () => {
        try {
            const res = await taskService.getAll();
            console.log(res.data);
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>List Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}
