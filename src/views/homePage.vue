<template>
  <div >

    <el-carousel :interval="2000" type="card" height="130px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card" >
      <el-input v-model="keywords" class="search"></el-input>
      <el-button type="primary" plain @click="query">搜索</el-button>
    </el-card>
    <br/>
      <div style="text-align: center;">
    <el-card class="box-card" >
        <p style="font-family: HBFont;">移动/互联网</p>
        <el-divider></el-divider>
        <button class="button" @click="frontSort">
           <p style="font-family: HBFont;font-weight: 800;font-size: 15px">前端</p>
        </button>
        &nbsp;
        <button class="button">
            <p style="font-family: HBFont;font-weight: 800;font-size: 15px">后端</p>
        </button>
        &nbsp;
        <button class="button">
            <p style="font-family: HBFont;font-weight: 800;font-size: 15px">服务区</p>
        </button>
        &nbsp;
        <button class="button">
            <p style="font-family: HBFont;font-weight: 800;font-size: 15px">数据库</p>
        </button>

      <div style="height: 20px;width: 200px;float: left">
      </div>
    </el-card>
      </div>
    <br/>
    <br/>
  </div>
</template>
<script>
import { query } from '@/api/book'
export default {
    data(){
        return{
          keywords:null
        }
    },
    methods :{
      query(){
        query({keywords:this.keywords}).then(res => {

        })
    },
        frontSort(){
            this.$router.push({
                path: '/booksort',
            })
        }


  }

}
</script>
<style scoped>
  .search{
    width:240px;
  }

  .button {
      display: inline-block;
      background-color: #ff0081;
      height:50px;
      width: 70px;
      color: #fff;
      border-radius: 3px;
      border: none;
      cursor: pointer;
      position: relative;
      box-shadow: 0 2px 25px rgba(233, 30, 99, 0.96);
      outline: 0;
      transition: transform ease-in 0.1s, background-color ease-in 0.1s,  box-shadow ease-in 0.25s;
  }
  .button::before{
      position: absolute;
      content: '';
      left: -2em;
      right: -2em;
      top: -2em;
      bottom: -2em;
      pointer-events: none;
      transition: ease-in-out .5s;
      background-repeat: no-repeat;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,
      15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
      background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,
      83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
      animation: bubbles ease-in-out .75s forwards;
  }

  .button:active {
      transform: scale(0.85);
      background-color: #f3037c;
      box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);
  }
  .button:active::before {
      animation: none;
      background-size: 0;
  }
  @keyframes bubbles {
      0% {
          background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,
          83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
      }
      50% {
          background-position: 10% 44%, 0 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%, 75% 0%, 95% -2%, 0% 80%,
          95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%, 68% 96%, 95% 100%;
      }
      100% {
          background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%,
          100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;
          background-size: 0 0;
      }
  }


  @font-face {
    font-family: HBFont;
    src: url('../assets/Heptal-Bold.ttf');
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #7674bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
