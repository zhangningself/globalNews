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
            title: '用户名',
            key: 'username',
            width: 180,
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
            width: 220
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
                    click: () => {
                      this.remove(params.index)
                    }
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
            username: 'gen_zhang2',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang3',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang4',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang5',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang6',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang7',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang8',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang9',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang10',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang11',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang12',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang13',
            password: '12345678',
            email: '17681989249@163.com',
            gender: '男',
            interest: '娱乐新闻、国际新闻、体育新闻、国内新闻、音乐新闻'
          },
          {
            username: 'gen_zhang14',
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
