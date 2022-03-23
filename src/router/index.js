import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import NotebookList from '../components/NotebookList.vue'
import NoteDetail from '../components/NoteDetail.vue'
import TrashDetail from '../components/TrashDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notebooks',
      component: NotebookList
    },
    {
      path: '/note/:noteId',
      component: NoteDetail
    },
    {
      path: '/trash/:noteId',
      component: TrashDetail
    },
  ]
})
