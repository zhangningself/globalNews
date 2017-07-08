<template>
  <div id="zn-header">
    <h1>
	    <a href="##">
	    	<img src="../../img/logo.png"/>
	    	
	    </a>
	    <img class="logo2" src="../../img/logo2.png"/>
    </h1>
    
    <div class="right">
    	hello!
    	<span>admin1
    		<div class="posiinfo">
    		<p><a href="##">查看个人资料</a></p>
    		<p><a href="##">退出</a></p>
    	</div>
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
    .right{
    		float: right;
    		padding: 30px;
    		right:0px;
    		top: 10px;
    		color: #2e2e2e;
    		font-size: 20px;
    		cursor: pointer;
    		position: relative;
    		span{
    			color: #FF6C60;
    			.posiinfo{
    			position: absolute;
    			left: 50px;
    			top: 60px;
    			/*display: none;*/
    			z-index: 10;
    			a{
    				font-size: 12px;

    			}
    		}
    		}
    }
  }
</style>
