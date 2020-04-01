<template>
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <!-- Tabs with icons -->
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">{{article.title}}</small>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <card shadow slot-scope="{activeTabIndex}">
          <tab-pane key="tab-0">
            <template slot="title">
              <i class="ni ni-cloud-upload-96 mr-2"></i>原文
            </template>
            <h3 style="text-align: center">{{article.title}}</h3>
            <h5 style="text-align: center">{{article.creativeTime}}</h5>
            <div style="text-align:left; width:900px; margin:0 auto;">
              <p class="description" v-html="article.content">{{article.content}}</p>
            </div>
          </tab-pane>
          <div v-for="item in otherInformation">
            <tab-pane key="{{ item.key }}">
              <template slot="title">
                <i class="ni ni-bell-55 mr-2"></i>{{ item.value }}
              </template>
              <div>
                <p class="description">
                  这首词是公元1076年（宋神宗熙宁九年）中秋作者在密州时所作。
                  词前的小序交待了写词的过程：“丙辰中秋，欢饮达旦，
                  大醉。作此篇，兼怀子由。”苏轼因为与当权的变法者王安石等人政见不同，
                  自求外放，辗转在各地为官。他曾经要求调任到离苏辙较近的地方为官，
                  以求兄弟多多聚会。公元1074年（熙宁七年）苏轼差知密州。到密州后，
                  这一愿望仍无法实现。公元1076年的中秋，皓月当空，银辉遍地，词人与胞弟苏辙分别之后，
                  已七年未得团聚。此刻，词人面对一轮明月，心潮起伏，于是乘酒兴正酣，挥笔写下了这首名篇。</p>
              </div>
            </tab-pane>
          </div>
        </card>
      </tabs>
    </div>
    <div class="col-lg-3">
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">{{ author.name }}</small>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <card shadow slot-scope="{activeTabIndex}">
          <tab-pane key="tab1">

            <template slot="title">
              <i class="ni ni-calendar-grid-58 mr-2"></i>{{ author.name }}
            </template>
            <img src="">
            <p class="description">{{ author.curriculumVitae }}</p>
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
        otherInformation: [
          {key: "tab-2", value: "译文"},
          {key: "tab-1", value: "赏析"},
          {key: "tab-3", value: "创作背景"},
          {key: "tab-5", value: "新增"}
        ],
        author: {
          curriculumVitae: "",
          name: ""
        },
        article: {
          title: "将进酒",
          creativeTime: "唐代：李白",
          content: "君不见黄河之水天上来，奔流到海不复回。<br>\n" +
            "君不见高堂明镜悲白发，朝如青丝暮成雪。<br>\n" +
            "人生得意须尽欢，莫使金樽空对月。<br>\n" +
            "天生我材必有用，千金散尽还复来。<br>\n" +
            "烹羊宰牛且为乐，会须一饮三百杯。<br>\n" +
            "岑夫子，丹丘生，将进酒，杯莫停。<br>\n" +
            "与君歌一曲，请君为我倾耳听。<br>\n" +
            "钟鼓馔玉不足贵，但愿长醉不愿醒。<br>\n" +
            "古来圣贤皆寂寞，惟有饮者留其名。<br>\n" +
            "陈王昔时宴平乐，斗酒十千恣欢谑。<br>\n" +
            "主人何为言少钱，径须沽取对君酌。<br>\n" +
            "五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p>"
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$http.get("http://localhost:8080/#/components").then((response) => {
          let author = {
            name: "李白",
            curriculumVitae: "李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆"
          }
          this.$data.author = author;
        })
      }
    }

  };
</script>
<style>
</style>
