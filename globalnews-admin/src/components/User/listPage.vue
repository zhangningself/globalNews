<template>
  <div id="zq-page">
    <search :datas="datas" @inputes="filter"></search>
    <p class="noMessage" v-if="show">如果你没查询请无视这条信息，如果进行了查询操作，但这条信息还在，那么骚瑞，没有你要找的用户~~(咳咳，不要问为什么，因为某人太懒。。。)</p>
    <Table border :columns="columns" :data="newdata"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="total" :current="current" @on-change="changePage"></Page>
        </div>
    </div>
  </div>
</template>

<script>
  import Search from './search.vue'

  export default{
    props: [
      'columns',
      'data'
    ],
    data () {
      return {
        show: false,
        datas: this.data,
        filterlist: [],
        newdata: [],
        current: 1,
        total: this.data.length,
        pagesize: 10,
        page: 1
      }
    },
    created () {
      this.filter()
      this.changePage(this.page)
    },
    methods: {
      pageClick (pageNum) {
        // 每次执行时先清空当前数组
        let newlist = []
        // pageNum:接收到的参数。i=(pageNum - 1)*this.pagesize意思是当前页数减去1在乘以每页要显示的数据数量
        // i < this.pagesize * pageNum当pageNum为2时,数据的小标i不能超过20。就能实现每页10条数据
        this.total = this.filterlist.length
        for (let i = (pageNum - 1) * this.pagesize; i < this.pagesize * pageNum; i++) {
          // 如果下标为i的数据存在，则push进空数组。
          if (this.filterlist[i]) {
            newlist.push(this.filterlist[i])
          }
        }
        return newlist
      },
      // 定义changpage方法，该方法的返回值为当前页，所以传参page
      changePage (page) {
        // 调用该方法时将参数传给pageClick方法，并将返回的数组赋值给另一个空数组
        this.newdata = this.pageClick(page)
      },
      filter (username) {
        if (username && username['length'] !== 0) {
          let newfilterlist = []
          for (var i = 0; i < this.data.length; i++) {
            if (username.indexOf(this.data[i].username) !== -1) {
              newfilterlist.push(this.data[i])
            }
          }
          this.filterlist = newfilterlist
          this.show = false
        } else {
          this.filterlist = this.data
          this.show = true
        }
        this.changePage(this.page)
      }
    },
    components: {
      Search
    }
  }
</script>

<style lang="scss">
  .noMessage{
    color:red;
    text-align:center
  }
</style>
