<template>
  <base-table :data="listData"
              thead-classes="text-primary">
    <template slot-scope="{row}">
      <router-link :to="{path:'/template_poetry',query:{id:1}}" >
        <td>
          <p class="title">{{row.title}}</p>
          <p class="text-muted">{{row.description}}</p>
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
            "title": "Update the Documentation",
            "description": "Dwuamish Head, Seattle, WA 8:47 AM",
            "done": false
          },
          {
            "title": "GDPR Compliance",
            "description": "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
            "done": true
          }]
      }
    }
  }
</script>

<style scoped>

</style>
