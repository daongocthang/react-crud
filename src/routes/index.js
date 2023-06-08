import { ListTask, CreateTask } from '~/components';

const routes = [
    { path: '/', component: ListTask },
    { path: '/new', component: CreateTask },
];

export default routes;
