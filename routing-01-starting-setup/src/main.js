import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'teams', path: '/', redirect: '/teams' },
        // { path: '/teams', component: TeamsList, alias: '/' },
        { 
            path: '/teams', 
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ] 
        },
        { 
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                // console.log('Before enter');
                next();
            } 
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

router.beforeEach(function(to, from, next) {
    // console.log('Global beforeEach');
    // console.log(to, from);
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({
    //         name: 'team-members', params: { teamId: 't2' }
    //     });
    // }

    if (to.meta.needsAuth) {
        console.log('Needs auth!');
        // next(false);
    }
    next();
});

router.afterEach(function(to, from) {
    // Implement code for sending data
});

const app = createApp(App);

app.use(router);

app.mount('#app');
