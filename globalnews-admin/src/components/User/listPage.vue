<template>
  <div id="zq-page">
    <Table border :columns="columns" :data="newdata"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="total" :current="current" @on-change="changePage"></Page>
        </div>
    </div>
    <span @click="clickss">aaa</span>
  </div>
</template>

<script>
  export default{
    props: [
      'columns',
      'data'
    ],
    data () {
      return {
        newdata: [],
        newlist: [],
        current: 1,
        total: this.data.length,
        pagesize: 10,
        page: 1
      }
    },
    created () {
      this.changePage(this.page)
    },
    methods: {
      pageClick (pageNum) {
        // 每次执行时先清空当前数组
        this.newlist = []
        // pageNum:接收到的参数。i=(pageNum - 1)*this.pagesize意思是当前页数减去1在乘以每页要显示的数据数量
        // i < this.pagesize * pageNum当pageNum为2时,数据的小标i不能超过20。就能实现每页10条数据
        for (let i = (pageNum - 1) * this.pagesize; i < this.pagesize * pageNum; i++) {
          // 如果下标为i的数据存在，则push进空数组。
          if (this.data[i]) {
            this.newlist.push(this.data[i])
          }
        }
        return this.newlist
      },
      // 定义changpage方法，该方法的返回值为当前页，所以传参page
      changePage (page) {
        // 调用该方法时将参数传给pageClick方法，并将返回的数组赋值给另一个空数组
        this.newdata = this.pageClick(page)
      }
    }
  }
</script>

<style lang="scss">
  
</style>
