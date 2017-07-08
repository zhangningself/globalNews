<template>
  <div id="app">
    <app-header></app-header>
    <div class="layout">
      <Row type="flex">
        <i-col span="4" class="layout-menu-left">
          <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" >
            <div class="layout-logo-left">导航栏</div>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                用户中心
              </template>
              <Menu-item name="1-1"><router-link to="/userlist" active-class="active" exact>用户列表</router-link></Menu-item>
              <Menu-item name="1-2"><router-link to="/useradd" active-class="active">用户添加</router-link></Menu-item>
              <Menu-item name="1-3"><router-link to="/useredit" active-class="active">用户编辑</router-link></Menu-item>
              <Menu-item name="1-4"><router-link to="/userdelete" active-class="active">用户删除</router-link></Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                新闻管理
              </template>
              <Menu-item name="2-1"><router-link to="/newslist" active-class="active">新闻列表</router-link></Menu-item>
              <Menu-item name="2-2"><router-link to="/newsedit" active-class="active">新闻编辑器</router-link></Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                评论管理
              </template>
              <Menu-item name="3-1"><router-link to="/commentlist" active-class="active">评论列表</router-link></Menu-item>
              <Menu-item name="3-2"><router-link to="/commentedit" active-class="active">管理评论</router-link></Menu-item>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                管理员
              </template>
              <Menu-item name="4-1"><router-link to="/managementlist" active-class="active">管理员列表</router-link></Menu-item>
              <Menu-item name="4-2"><router-link to="/genmanage" active-class="active">普通管理员</router-link></Menu-item>
              <Menu-item name="4-3"><router-link to="/supermanage" active-class="active">超级管理员</router-link></Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="20">
          <router-view></router-view>
        </i-col>
      </Row>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './components/Header/header.vue'
  import appFooter from './components/Footer/footer.vue'
  export default {
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<style lang="scss">
  .layout{
      background: #f5f7f9;
      position: relative;
      min-height:500px;
  }
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 200px;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
  }
  .layout-content-main{
      padding: 10px;
  }
  .layout-copy{
      text-align: center;
      padding: 10px 0 20px;
      color: #9ea7b4;
  }
  .layout-menu-left{
      background: #464c5b;
      min-height:500px;
      .ivu-menu{
        & > .ivu-menu-item{
          padding:0;
          & > a{
            display:block;
            padding:12px 0 12px 43px;
            color:rgba(255,255,255,.7);
            &.active{
              color:rgb(255,255,255);
            }
          }
        }
      }
  }
  .layout-header{
      height: 60px;
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
      width: 90%;
      height: 30px;
      line-height:30px;
      font-size:22px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
      color:#fff;
      text-align:center;
  }
</style>
