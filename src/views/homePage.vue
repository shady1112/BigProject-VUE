<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="gray" text-color="white">

      <el-submenu index="1" class="topbar">

        <template slot="title">
          <el-avatar :size="40" :src="circleUrl"></el-avatar>
          <span class="topBarStyle">个人中心</span></template>
        <el-menu-item index="2-1"><span class="topBarStyle">账号信息</span></el-menu-item>
        <el-menu-item index="2-2"><span class="topBarStyle">我的悬赏</span></el-menu-item>
        <el-menu-item index="2-3"><span class="topBarStyle">积分信息</span></el-menu-item>
      </el-submenu>

      <el-menu-item index="3" class="topbar">
        <i class="el-icon-alarm-clock"></i>
        <span slot="title" class="topBarStyle">
          现在是 {{ date }}
        </span>
      </el-menu-item>


      <el-menu-item index="4" class="topbar">
        <span slot="title" class="topBarStyle">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </el-menu-item>

      <el-menu-item index="5" class="topbar" @click="exit()">
        <i class="el-icon-upload2" style="color: #d3dce6;size: 20px"> </i>
        <span slot="title" class="topBarStyle">
          退出登录
        </span>
      </el-menu-item>
    </el-menu>
    <br>
    <el-card shadow="always" class="card">
      <el-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <br>
    <el-card shadow="always" class="card">
      <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
        <el-table-column
            label="Date"
            prop="date">
        </el-table-column>
        <el-table-column
            label="Name"
            prop="name">
        </el-table-column>
        <el-table-column
            align="right">
          <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-pagination
          background
          style="text-align: center"
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </el-card>
    <br>
    <div>
      <el-card shadow="always" class="card">
        <font style="font-family: myFont3;font-weight: 600;font-size: 20px;width: 90%;">创建悬赏</font>
      </el-card>
      <el-card shadow="always" class="card">
        <font style="font-family: myFont3;font-weight: 600;font-size: 18px;width: 90%;">悬赏标题</font>
        <font style="font-family: myFont3;font-weight: 500;font-size: 17px;width: 90%;">（简单描述问题的发生的原因及环境）</font>
        <el-input v-model="tittle"></el-input>
        <br> <br>
        <font style="font-family: myFont3;font-weight: 600;font-size: 18px;width: 90%;">编程语言 ：</font>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <br> <br>
        <font style="font-family: myFont3;font-weight: 600;font-size: 18px;width: 90%;">悬赏描述</font>
        <font
            style="font-family: myFont3;font-weight: 500;font-size: 17px;width: 90%;">（详细描述出现问题的原因场景，环境以及报错截图或是堆栈信息）</font>
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption">
        </quill-editor>
        <br>
        <el-button type="success">
          <font style="font-family: myFont3;font-weight: 500;font-size: 17px;width: 90%;">
            提交悬赏
          </font></el-button>
      </el-card>
      <br>
    </div>
  </div>
</template>
<script>
import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Cookies from 'js-cookie'

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      date: new Date(),
      content: null,
      editorOption: {},
      keywords: null,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  created() {
    this.getCurTime();
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.image[0].height
    }, false)

    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000)
    beforeDestroy()
    {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    }
  },
  methods: {
    exit() {
      Cookies.remove("account");
      this.$router.push({
        path: '/',
      })
    },




    createOffer() {
      this.$router.push({
        path: '/CreateOffer',
      })
    }


  }

}
</script>
<style>
.card {
  width: 70%;
  margin: auto;
}


.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.topbar {
  text-align: right;
}

.topBarStyle{
  font-family: myFont3;
  font-weight: 600;
  font-size: 20px;
}

@font-face {
  font-family: myFont3;
  src: url("../assets/microRice.otf");
}

</style>
