import userlist from './components/User/userList.vue'
import useradd from './components/User/userAdd.vue'
import useredit from './components/User/userEdit.vue'
import userdelete from './components/User/userDelete.vue'

import newslist from './components/News/newsList.vue'
import newsedit from './components/News/newsEdit.vue'

import commentlist from './components/comment/commentList.vue'
import commentedit from './components/comment/commentEdit.vue'

import managementlist from './components/manage/managementList.vue'
import genmanage from './components/manage/genManage.vue'
import supermanage from './components/manage/superManage.vue'

export const routes = [
  {path: '/userlist', component: userlist},
  {path: '/useradd', component: useradd},
  {path: '/useredit', component: useredit},
  {path: '/userdelete', component: userdelete},
  {path: '/newslist', component: newslist},
  {path: '/newsedit', component: newsedit},
  {path: '/commentlist', component: commentlist},
  {path: '/commentedit', component: commentedit},
  {path: '/managementlist', component: managementlist},
  {path: '/genmanage', component: genmanage},
  {path: '/supermanage', component: supermanage}
]
