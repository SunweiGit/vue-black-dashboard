<template>
  <div class="row justify-content-center" v-if="poetryInfo.id!=''">
    <div class="col-lg-9">
      <!-- Tabs with icons -->
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">{{poetryInfo.title}}</small>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <card shadow slot-scope="{activeTabIndex}">
          <tab-pane key="tab-0">
            <template slot="title">
              <i class="ni ni-cloud-upload-96 mr-2"></i>原文
            </template>
            <h3 style="text-align: center">{{poetryInfo.title}}</h3>
            <h5 style="text-align: center">{{poetryInfo.creativeTime}}</h5>
            <div style="text-align:left; width:900px; margin:0 auto;">
              <p class="description" v-html="poetryInfo.content">{{poetryInfo.content}}</p>
            </div>
          </tab-pane>
          <div v-for="item in poetryOtherInfo">
            <tab-pane key="{{ item.id }}">
              <template slot="title">
                <i class="ni ni-bell-55 mr-2"></i>{{ item.key }}
              </template>
              <div v-for="value in item.value">
                <p class="description" v-html="value">{{value}}</p>
              </div>
            </tab-pane>
          </div>
        </card>
      </tabs>
    </div>

    <div class="col-lg-3" v-if="authorInfo.id!=''">
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">{{ authorInfo.authorName }}</small>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <card shadow slot-scope="{activeTabIndex}">
          <tab-pane key="tab1">

            <template slot="title">
              <i class="ni ni-calendar-grid-58 mr-2"></i>{{ authorInfo.authorName }}
            </template>
            <img src="">
            <p class="description"  v-html="authorInfo.introduction">{{ authorInfo.introduction }}</p>
          </tab-pane>
        </card>
      </tabs>
    </div>
  </div>
</template>
<script>
  import Tabs from "@/components/Tabs/Tabs.vue";
  import TabPane from "@/components/Tabs/TabPane.vue";

  export default {
    components: {
      Tabs,
      TabPane
    },
    data() {
      return {
        poetryOtherInfo: [],
        authorInfo: {
          id: "",
          img: "",
          introduction: "",
          otherId: [],
          authorName: ""
        },
        poetryInfo: {
          id: "",
          authorId: "",
          title: "",
          otherId: "",
          tag: [],
          creationTime: "",
          content: ""
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        const query = this.$route.query;
        console.log("query" + query)
        this.$http.get("/service-api/poetry/view", {params: query}).then((response) => {
          this.$data.author = response.data.data.authorInfo;
          this.$data.poetryInfo = response.data.data.poetryInfo;
          console.log(response.data.data.poetryOtherInfo)
          this.$data.poetryOtherInfo = response.data.data.poetryOtherInfo;
        })
      }
    }

  };
</script>
<style>
</style>
