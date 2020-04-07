<template>
  <base-table :data="listData"
              thead-classes="text-primary">
    <template slot-scope="{row}">
      <router-link :to="{path:'/template_poetry',query:{id:row.title}}">
        <td>
          <p v-html="row.title" class="title">{{row.title}}</p>
          <p v-html="row.description" class="text-muted">{{row.description}}</p>
        </td>
      </router-link>
    </template>
  </base-table>
</template>

<script>
  import {BaseTable} from '@/components'

  export default {
    name: "HomeLeftList",
    components: {
      BaseTable
    }, data() {
      return {
        listData: [
          {
            "title": "唐诗",
            "description": "唐代的古体诗，主要有五言和七言两种。近体诗也有两种，一种叫做绝句，一种叫做律诗。"
          },
          {
            "title": "宋词",
            "description": "宋代盛行的一种中国文学体裁，宋词是一种相对于古体诗的新体诗歌之一，标志宋代文学的最高成就"
          },
          {
            "title": "四书",
            "description": "四书又称四子书，是《论语》《孟子》《大学》《中庸》的合称"
          },
          {
            "title": "五经",
            "description": "五经一般指儒家典籍《诗经》《尚书》《礼记》《周易》《春秋》的合称。《诗》温柔宽厚，《书》疏通知远，《乐》广博易良，《易》洁静精微，《礼》恭俭庄敬；《春秋》属词比事"
          }]
      }
    }
  }
</script>

<style>

</style>
