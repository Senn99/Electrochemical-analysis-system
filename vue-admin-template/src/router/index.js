import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import Register from '@/views/ea/user/register'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 登录
  {
    path: '/login',
    component: () => import('@/views/ea/login/login'),
    hidden: true
  },
  // 注册
  {
    path: '/register',
    component: Register,
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/info',
    hidden: true,
    children: [{
      path: 'info',
      name: 'Info',
      component: () => import('@/views/ea/admin/info/index'),
      meta: { title: '个人信息', icon: 'user' }
    }]
  },

  {
    path: '/forgetPasswordVerify',
    component: () => import('@/views/ea/user/forgetPasswordVerify'),
    hidden: true
  },

  {
    path: '/forgetPasswordInfo',
    component: () => import('@/views/ea/user/forgetPasswordInfo'),
    hidden: true
  },

  //
  // {
  //   path: '/admin/userManage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'logoutUserVerify',
  //       name: 'LogoutUserVerify',
  //       component: () => import('@/views/ea/admin/userManage/logoutUserVerify'),
  //       meta: { title: '注销账户验证', icon: 'user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/admin/userManage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'logoutUserInfo',
  //       name: 'LogoutUserInfo',
  //       component: () => import('@/views/ea/admin/userManage/logoutUserInfo'),
  //       meta: { title: '注销账户信息', icon: 'user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/admin/userManage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'modifyEmailVerify',
  //       name: 'ModifyEmailVerify',
  //       component: () => import('@/views/ea/admin/userManage/modifyEmailVerify'),
  //       meta: { title: '修改email验证', icon: 'user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/admin/userManage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'modifyEmailInfo',
  //       name: 'ModifyEmailInfo',
  //       component: () => import('@/views/ea/admin/userManage/modifyEmailInfo'),
  //       meta: { title: '修改email信息', icon: 'user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/admin/userManage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'modifyPasswordVerify',
  //       name: 'ModifyPasswordVerify',
  //       component: () => import('@/views/ea/admin/userManage/modifyPasswordVerify'),
  //       meta: { title: '修改密码验证', icon: 'user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/admin/userManage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'modifyPasswordInfo',
  //       name: 'ModifyPasswordInfo',
  //       component: () => import('@/views/ea/admin/userManage/modifyPasswordInfo'),
  //       meta: { title: '修改密码信息', icon: 'user' }
  //     }
  //   ]
  // },

  {
    path: '/admin/userManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'UserManage',
        component: () => import('@/views/ea/admin/userManage/index'),
        meta: { title: '用户管理', icon: 'user' }
      }
    ]
  },

  {
    path: '/admin/unfreezeAudit',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'UnfreezeAudit',
        component: () => import('@/views/ea/admin/unfreezeAudit/index'),
        meta: { title: '解冻审核', icon: 'user' }
      }
    ]
  },

  //申请验证
  {
    path: 'unfreezeApplicationVerify',
    component: () => import('@/views/ea/admin/unfreezeAudit/unfreezeApplicationVerify'),
    hidden: true
  },

  //申请解冻信息
  {
    path: 'unfreezeApplicationInfo',
    component: () => import('@/views/ea/admin/unfreezeAudit/unfreezeApplicationInfo'),
    hidden: true
  },

  {
    path: '/admin/fileManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'FileManage',
        component: () => import('@/views/ea/admin/fileManage/index'),
        meta: { title: '文件管理', icon: 'user' }
      }
    ]
  },

  {
    path: '/admin/operatingRecord',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'OperatingRecord',
        component: () => import('@/views/ea/admin/operatingRecord/index'),
        meta: { title: '操作记录', icon: 'user' }
      }
    ]
  },

  {
    path: '/admin/algorithmManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'AlgorithmManage',
        component: () => import('@/views/ea/admin/algorithmManage/index'),
        meta: { title: '算法管理', icon: 'user' }
      }
    ]
  },

  {
    path: '/superAdmin/adminManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'AdminManage',
        component: () => import('@/views/ea/superAdmin/adminManage/index'),
        meta: { title: '管理员管理', icon: 'user' }
      }
    ]
  },

  {
    path: '/superAdmin/operationRecord',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'OperationRecord',
        component: () => import('@/views/ea/superAdmin/operationRecord/index'),
        meta: { title: '操作记录管理', icon: 'user'}
      }
    ]
  },

  {
    path: '/superAdmin/systemBackup',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'SystemBackup',
        component: () => import('@/views/ea/superAdmin/systemBackup/index'),
        meta: {title: '系统备份', icon: 'user'}
      }
    ]
  },

  {
    path: '/superAdmin/systemRestore',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'SystemRestore',
        component: () => import('@/views/ea/superAdmin/systemRestore/index'),
        meta: {title: '系统还原', icon: 'user'}
      }
    ]
  },

  {
    path: '/superAdmin/algorithmAudit',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'AlgorithmAudit',
        component: () => import('@/views/ea/superAdmin/algorithmAudit/index'),
        meta: {title: '算法审核', icon: 'user'}
      }
    ]
  },

  {
    path: '/superAdmin/roleManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'RoleManage',
        component: () => import('@/views/ea/superAdmin/roleManage/index'),
        meta: {title: '角色管理', icon: 'user'}
      }
    ]
  },



  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
