<template>
  <div id="zq-filter">
    <p class="search"><Input v-model="value" placeholder="请输入要查找的用户名..." @input="inputed" style="width: 300px"></Input></p>
    <p v-for="username in filtered"></p>
  </div>
</template>

<script>
  export default {
    props: [
      'datas'
    ],
    data () {
      return {
        filtername: [],
        usernames: [],
        value: ''
      }
    },
    created () {
      this.getUserName(this.datas)
    },
    methods: {
      getUserName (data) {
        for (let i = 0; i < data.length; i++) {
          this.usernames.push(data[i].username)
        }
      },
      inputed () {
        this.getValue()
        this.$emit('inputes', this.filtername)
      },
      getValue () {
        this.filtername = this.filtered
      }
    },
    computed: {
      filtered () {
        var arr = []
        if (this.value !== '') {
          this.usernames.filter((element) => {
            if (element.match(this.value) !== null) {
              arr.push(element.match(this.value)['input'])
            }
          })
        }
        return arr
      }
    }
  }
</script>

<style lang="scss">
  #zq-filter{
    .search{
      text-align: center;
      margin:0 auto;
    }
    
  }
</style>
