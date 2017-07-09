<template>
  <div id="zq-userList">
    <list-page :columns="columns" :data="data" :total="total"></list-page>
  </div>
</template>

<script>
  import ListPage from './listPage.vue'

  export default {
    data () {
      return {
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '用户名',
            key: 'username',
            width: 150,
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.username)
              ])
            }
          },
          {
            title: '密码',
            key: 'password',
            width: 120
          },
          {
            title: '邮箱地址',
            key: 'email',
            width: 190
          },
          {
            title: '性别',
            key: 'gender',
            width: 60
          },
          {
            title: '新闻兴趣',
            key: 'interest',
            width: 390
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      // 此处点击跳转用户编辑模块并传入用户名对应的id号到用户编辑模块
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    // 此处点击对数据库数据进行删除操作。
                  }
                }, '删除')
              ])
            }
          }
        ],
        data: [
          {
            username: 'gen_zhang1',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'rgdgzsf',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'dszgthbdrg',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'fjfdgszdg',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gfndfd',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'sheffzs',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gfjxdgsez',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'dwgz',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'hfxxhgdfxd',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'dszhfxg',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'xdjjfxgxd',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'xdfjfgcbfgx',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'fxjgfggdgxf',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'zdxjfgxdfxz',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          }
        ],
        total: 14
      }
    },
    methods: {
      show (index) {
      },
      remove (index) {
        this.data.splice(index, 1)
      }
    },
    components: {
      ListPage
    }
  }
</script>

<style lang="scss">
  .ivu-table-cell{
    white-space:nowrap;
    overflow:hidden;
  }
</style>
