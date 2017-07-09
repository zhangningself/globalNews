<template>
  <div id="zn-header">
    <h1>
	    <a href="##">
	    	<img src="../../assets/images/logo.png"/>
	    </a>
	    <img class="logo2" src="../../assets/images/logo2.png"/>
    </h1>
		<p class="welcome">全球新闻后台管理系统</p>
    <div class="right">
    	hello!
    	<span>admin1
    		<span class="posiinfo">
					<a href="##">退出</a>
				</span>
    	</span>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

  #zn-header{
  	margin: 0 auto;
    width:1200px;
    height:100px;
    background:#fff;
    position: relative;
    h1{
    	position: absolute;
    	top: 10px;
    	left: 5px;
    	a img{
    		width: 80px;
    	}
    	.logo2{
    		position: absolute;
    		top: 10px;
    		left: 95px;
    	}
    }
    .welcome{
			position: absolute;
			font-size: 22px;
			top: 45px;
			left: 330px;
		}
    .right{
    		float: right;
    		padding: 30px;
    		right:0px;
    		top: 20px;
    		color: #2e2e2e;
    		font-size: 20px;
    		cursor: pointer;
    		position: relative;
    		span{
    			color: #FF6C60;
    			a{
    				font-size: 12px;
    			}
    		}
    }
  }
</style>
