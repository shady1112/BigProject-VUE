<template>
  <div >
    <vue-particles
        color="#dedede"
        :particleOpacity="0.6"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="7"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        CLASS="background"
    >
    </vue-particles>
    <div>
    <el-card class="box-card" shadow="hover">
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
                      v-loading.fullscreen.lock="fullscreenLoading">
             <font style="font-family: myFont3;font-weight: 600;font-size: 18px">登 陆</font></el-button>
         </el-form-item>
         <br>
       </el-form>
       <el-divider><font style="font-family: myFont3;font-size: 18px;font-weight: 600">或</font></el-divider>
       <font class="fonts">没有账户？<el-button type="text"  style="font-size: 20px;font-family: myFont2;font-weight: 600" @click="dialogVisible = true">注册</el-button></font>
     </div>
    </el-card>

    <el-dialog
            title="注册"
            :visible.sync="dialogVisible"
            width="18%"
            >

      <div class="registeryDialog">
        <img src="../assets/159602672991491.png" style="width: 200px;height: 50px ;margin-top: 10px;margin-bottom: 15px "/>

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
          <el-popover
                  placement="top-start"
                  width="200"
                  trigger="hover"
                  content="确认您的密码！">
            <i class="el-icon-warning-outline" style="font-size: 20px" slot="reference"></i>
          </el-popover>
        </el-form-item>
          <el-form-item prop="password">
            <el-input  class="password" v-model="registryForm.mail" autocomplete="off" placeholder="请输入邮箱"></el-input>
            <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="请输入您的电子邮箱！">
              <i class="el-icon-warning-outline" style="font-size: 20px" slot="reference"></i>
            </el-popover>
          </el-form-item>
          <el-form-item prop="password">
            <el-input  class="password" v-model="registryForm.code" style="width: 140px" placeholder="请输入验证码"></el-input>
            <el-button type="primary" class="submit"
                       @click="sendMail()"
                       style="width: 110px"
                       v-loading.fullscreen.lock="fullscreenLoading" plain>获取验证码</el-button>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit"
                     @click="registry()"
                     style="width: 260px"
                     v-loading.fullscreen.lock="fullscreenLoading">注册</el-button>

        </el-form-item>
      </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
    </div>
  </div>
</template>
<script>
  import { login, registry, sendMail }from '../api/book'
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
          mail:null,
          code:null
        },
        fullscreenLoading: false,
        dialogVisible: false,
        imgSrc:require('../assets/timg (2).jpg')

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
          this.list = res.data
          this.code = res.data.success
          if (this.code==true){
            this.$message({
              type :  "success",
              message: res.data.obj.msg
            });
            this.dialogVisible=false
          }
          if (this.code==false){
            this.$message({
              type :  "success",
              message: res.data.msg
            });
          }
        })
      },
      sendMail(){
        sendMail({userMail:this.registryForm.mail, code: this.registryForm.code}).then(res=>{
         var mail = this.registryForm.mail
          if (res.data.success == true){
            this.$message({
              type :  "success",
              message: res.data.msg
            });
            if(mail.indexOf("qq")!=-1){
              window.open("https://mail.qq.com/")
            }
            if(mail.indexOf("163")!=-1){
              window.open("https://mail.163.com/")
            }
          }else {
            this.$message({
              type :  "error",
              message: res.data.msg
            });
          }
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
  .background {
    background-image: url('../assets/timg (2).jpg');
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
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
    box-shadow: 2px 2px 10px #d3dce6;

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
    font-family: myFont3;
    margin-left: 160px;
    font-weight: 600;
  }
  .registeryDialog{
    text-align: center;
    margin: 0 auto;
  }
  @font-face {
    font-family: myFont1;
    src: url("../assets/Heptal-Bold.ttf");
  }
  @font-face {
    font-family: myFont2;
    src: url("../assets/blackSimple.ttf");
  }
  @font-face {
    font-family: myFont3;
    src: url("../assets/microRice.otf");
  }
</style>
