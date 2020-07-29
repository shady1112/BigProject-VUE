<template>
  <div style="position: absolute;top: 170px;left: 500px;">
    <el-card class="box-card">
     <div v-for="o in 1" :key="o" class="text item">
       <el-form v-model="ruleForm" status-icon  label-width="100px" class="demo-ruleForm"  @click="submitForm()">
         <el-form-item label="账号"  prop="loginName">
           <el-input type="text" class="loginName" v-model="ruleForm.account" autocomplete="off" placeholder="请输入账号"></el-input>
         </el-form-item>
         <el-form-item label="密码" prop="password">
           <el-input type="password" class="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
         </el-form-item>

         <el-form-item>
           <el-button type="primary" class="submit"
                      @click="submitForm()"
                      v-loading.fullscreen.lock="fullscreenLoading">登陆</el-button>
         </el-form-item>
       </el-form>
     </div>
    </el-card>
  </div>
</template>
<script>
  import { login }from '../api/book'
  import { Loading } from 'element-ui';
  export default {
    data() {
      return {
        ruleForm: {
          account : null,
          password : null,

        },
        fullscreenLoading: false

      }

    },
    methods:{
      openFullScreen1() {
        this.fullscreenLoading = true;

        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);

      },
      submitForm(){
        if (this.ruleForm.name==null){
          console.log("请输入账号")
        }
        if (this.ruleForm.pass==null){
          console.log("请输入密码")
        }
        if (this.ruleForm.pass==null && this.ruleForm.name==null){
          console.log("请输入账号密码")
        }
        login({account: this.ruleForm.account,password: this.ruleForm.password }).then( res=> {
          this.list = res.data
          console.log(this.list)

          if (this.list.code == 0){
            this.$message({
              type : this.list.success ? "success" : "error",
              message: this.list.obj.msg + '上次登陆时间' + this.list.obj.lastlogin
            });
            this.openFullScreen1();
            setTimeout(() => {
              this.$router.push({
                path: '/booksort',
              })
            }, 2000);

          }else {
            this.$message({
              type : this.list.success ? "success" : "error",
              message: this.list.msg
            });
          }

        })

      }

    }
  }
</script>
<style>
  .text {
/*
    font-size: 24px;
*/
  }
  .item {
    padding: 30px;
  }

  .box-card {
    width: 480px;
  }

  .loginName{
    width: 230px;
  }

  .password{
    width: 230px;
  }

  .submit{
    width: 180px;
    font-size: 15px;
  }
</style>
