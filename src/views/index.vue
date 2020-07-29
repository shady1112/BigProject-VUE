<template>
  <div >
    <el-card class="box-card">
      <img src="../assets/159602672991491.png" style="width: 200px;height: 50px; margin-left: 115px;margin-top: 40px "/>
     <div class="text item">
       <el-form v-model="ruleForm" status-icon  label-width="100px" class="demo-ruleForm"  @click="submitForm()">
         <el-form-item prop="loginName">
           <el-input type="text" class="loginName" v-model="ruleForm.account" autocomplete="off" placeholder="请输入账号"></el-input>
         </el-form-item>
         <el-form-item prop="password">
           <el-input type="password" class="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
         </el-form-item>

         <el-form-item>
           <el-button type="primary" class="submit"
                      @click="submitForm()"
                      v-loading.fullscreen.lock="fullscreenLoading">登陆</el-button>
         </el-form-item>
         <br>
       </el-form>
       <el-divider>或</el-divider>
       <font class="fonts">没有账户？<el-button type="text"  style="font-size: 16px" @click="dialogVisible = true">注册</el-button></font>
     </div>
    </el-card>

    <el-dialog
            title="注册"
            :visible.sync="dialogVisible"
            width="15%"
            >
      <div class="registeryDialog">
      <el-form v-model="registryForm">
        <el-form-item prop="loginName">
          <el-input type="text" class="loginName" v-model="registryForm.newAccount" autocomplete="off" placeholder="请输入账号"></el-input>
          <el-popover
                  placement="top-start"
                  width="200"
                  trigger="hover"
                  content="账号长度最少6位！">
            <i class="el-icon-warning-outline" style="font-size: 20px" slot="reference"></i>
          </el-popover>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" class="password" v-model="registryForm.newPassword" autocomplete="off" placeholder="请输入密码"></el-input>
          <el-popover
                  placement="top-start"
                  width="200"
                  trigger="hover"
                  content="密码长度最少6位！">
            <i class="el-icon-warning-outline" style="font-size: 20px" slot="reference"></i>
          </el-popover>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" class="password" v-model="registryForm.newPassword2" autocomplete="off" placeholder="请确认密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="submit"
                     @click="registry()"
                     v-loading.fullscreen.lock="fullscreenLoading">注册</el-button>
        </el-form-item>
      </el-form>
      </div>
      <span slot="footer" class="dialog-footer">

  </span>
    </el-dialog>
  </div>
</template>
<script>
  import { login, registry }from '../api/book'
  import { Loading } from 'element-ui';
  export default {
    data() {
      return {
        ruleForm: {
          account : null,
          password : null,

        },
        registryForm:{
          newAccount:null,
          newPassword:null,
          newPassword2:null,
        },
        fullscreenLoading: false,
        dialogVisible: false


      }

    },
    methods:{
      handleClose(done) {
        this.$confirm('确认关闭？')
                .then(_ => {
                  done();
                })
                .catch(_ => {});

    },
      openFullScreen1() {
        this.fullscreenLoading = true;

        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);

      },
      registry(){
        if (this.registryForm.newAccount==null&&this.registryForm.newPassword==null&&this.registryForm.newPassword2==null){
          this.$message({
            type :  "error",
            message: "请输入账号密码！"
          });
          return null;
        }
        if (this.registryForm.newAccount==null){
          this.$message({
            type :  "error",
            message: "请输入账号！"
          });
          return null;
        }
        if (this.registryForm.newPassword==null){
          this.$message({
            type :  "error",
            message: "请输入密码！"
          });
          return null;
        }
        if (this.registryForm.newPassword2==null){
          this.$message({
            type :  "error",
            message: "请确认密码！"
          });
          return null;
        }
        if (this.registryForm.newPassword != this.registryForm.newPassword2){
          this.$message({
            type :  "error",
            message: "两次密码输入不一致！"
          });
          return null;
        }
        registry({account: this.registryForm.newAccount,password: this.registryForm.newPassword}).then(res=>{


        })
      },
      submitForm(){
        if (this.ruleForm.account==null && this.ruleForm.password==null){
          this.$message({
            type :  "error",
            message: "请输入账号密码！"
          });
          return null;
        }
        if (this.ruleForm.account==null){
          this.$message({
            type :  "error",
            message: "请输入账号！"
          });
          return null;
        }
        if (this.ruleForm.password==null){
          this.$message({
            type :  "error",
            message: "请输入密码！"
          });
          return null;
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
    margin-top: 20px;
  }
  /*.item {
    padding: 30px;
  }*/

  .box-card {
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    margin: auto;
    width: 480px;
    height: 500px;
  }

  .loginName{
    width: 230px;
  }

  .password{
    width: 230px;
  }

  .submit{
    width: 230px;
    font-size: 15px;
  }
  .fonts{
    font-family: myFont;
    margin-left: 160px;
  }
  .registeryDialog{
    margin-left: 60px;
  }
  @font-face {
    font-family: myFont;
    src: url("../assets/Heptal-Bold.ttf");
  }
</style>
