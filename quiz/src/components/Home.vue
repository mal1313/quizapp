<template>
  <div>
      <v-col justify="center" align="center">
    <h1 class="text-center" style="font-family:'Montserrat Subrayada'; font-size:70px;">1YEAR ANNIVERSARY</h1>
    <p style="font-family: 'M PLUS 1p';">ゲームを開始します</p>
    <router-link to="/list" style="text-decoration: none; color:white" ><v-btn rounded color="primary" dark class="mt-10 pa-5" x-large>START</v-btn></router-link>
    </v-col>
    <v-row>
      <div>
        <v-col>
          <v-card >
            <v-img max-height="210px" max-width="210px" ></v-img>
          </v-card>
        </v-col>
      </div>
    </v-row>
    <v-row>
    <v-slide-group interval multiple show-arrows style="margin:100px 0 0 0;">
      <v-slide-item v-for="item in itemlist" :key="item">
        <v-card style="margin: 0 20px 0 0; width: 320px; height: 240px;">
      <div >
        <v-img max-height="200px" :src="item.img"></v-img>
        </div>
          <v-card-title class="ma-0 py-0">sample title</v-card-title>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    </v-row>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
    name: 'Home',

    data: () => ({
        itemlist:[
          {
            // 日付を入れる
            img:'https://i1.wp.com/girlydrop.com/wp-content/uploads/2020/02/Whiteday2020-12.jpg?resize=500%2C333&ssl=1'
          },
          {
            img:'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
          },
                    {
            img:'https://i1.wp.com/girlydrop.com/wp-content/uploads/2020/02/Whiteday2020-12.jpg?resize=500%2C333&ssl=1'
          },
                    {
            img:'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
          },
                    {
            img:'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
          },
                    {
            img:'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
          },
                    {
            img:'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
          },
                    {
            img:'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
          }
        ]
    }),
}
</script>