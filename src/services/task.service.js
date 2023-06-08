import request from '~/request';

const getAll = () => request.get(`/task`);

const get = (id) => request.get(`/task/${id}`);

const create = (data) => request.post(`/task`, data);

const update = (data, id) => request.put(`/task/${id}`, data);

const remove = (id) => request.delete(`/task/${id}`);

const removeAll = () => request.delete(`/task`);

const findByTitle = (title) => request.get(`/task?title=${title}`);

const taskService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};

export default taskService;
