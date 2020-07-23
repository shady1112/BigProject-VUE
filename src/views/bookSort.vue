<template>
    <div>
    <div v-for="book in bookinfo" >
    <el-card class="box-card">
        <div class="top-inside-left">
                <el-image
                        style="width: 80px; height: 80px"
                        :src="book.bookimage"
                        :fit="fit">
                </el-image>
        </div>
        <div class="top-inside-middle">
                {{ book.bookname }}
        </div>
    </el-card>
        <el-collapse >
            <el-collapse-item title="查看详情" name="1">
                <div>{{ book.bookinfo }}</div>
            </el-collapse-item>
        </el-collapse>
        <br>

        </div>
    </div>
</template>

<script>
    import { query } from '@/api/book'
    export default {
        name: "bookSort",
        data(){
            return{
                bookinfo:[],
                fit: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                id:null
            }
        },
        created() {
            this.query()
            },
        methods: {
            query() {
                query({keywords: 'java'}).then(res => {
                    this.bookinfo = res.data.data
                    console.log(res.data.data)
                })
            }
        }
    }
</script>

<style scoped>
    .top-inside-left{
        border-radius:10px;
        float: left;
    }
    .top-inside-middle{
        margin-left: 5px;
        line-height:28px;
        width: 230px;
        height: 85px;
        float: left;
    }
</style>