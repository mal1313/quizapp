<template>
  <div>
      <v-col justify="center" align="center">
    <h1 class="text-center" style="font-family:'Montserrat Subrayada'; font-size:70px;">&#x1f389;1YEAR ANNIVERSARY&#x1f389;</h1>
    <p style="font-family: 'M PLUS 1p';">	ゲームを開始します	&#x2728;</p>
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
        <v-card style="margin: 0 20px 0 0; width: 320px; height: 280px;">
      <div >
        <v-img max-height="240px" :src="item.img"></v-img>
        </div>
          <v-card-title class="ma-0 py-0">{{item.date}}</v-card-title>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    </v-row>
        <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-img src="@/assets/mickey.png"
          v-bind="attrs"
          v-on="on"
          max-width="50px"
          right
          style="margin:250px 100px 0 1500px"
          ></v-img>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Dear YOTA
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">
          遠距離半年、近距離半年の1年だったね。
          <div>遠くにいたけど毎日用事がない日は電話して喧嘩もしたけど、すごく楽しい毎日で幸せです	&#x1f60a;ほんとにありがとう！ずっと一緒にいる日までお互い仕事頑張っていこうね！</div>
          <div>私の元気の源はよーたで元気になる方法もよーたで不機嫌になっちゃうのもよーたでとにかく私にはよーたが一番だよ！ｗ</div>
          <div>世界中の誰よりも愛してるよ。これからもよろしくねん</div>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
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
            img:require('@/assets/0113.jpg'),
            date:'2021/01/13'
          },
          {
            img:require('@/assets/0116.jpg'),
            date:'2021/01/16'

          },
                    {
            img:require('@/assets/0130.jpg'),
            date:'2021/01/30'

          },
          {
            img:require('@/assets/07223.jpg'),
            date:'2021/07/22'

          },
                    {
            img:require('@/assets/0302.jpg'),
            date:'2021/03/02'

          },
                    {
            img:require('@/assets/0505.jpg'),
            date:'2021/05/05'

          },
                    {
            img:require('@/assets/0131.jpg'),
            date:'2021/01/31'

          },
                    {
            img:require('@/assets/07234.jpg'),
            date:'2021/07/22'

          },
                    {
            img:require('@/assets/0721.jpg'),
            date:'2021/07/21'

          },
                    {
            img:require('@/assets/0721ise.jpg'),
            date:'2021/07/21'

          },
          {
            img:require('@/assets/0722.jpg'),
            date:'2021/07/22'

          },
          {
            img:require('@/assets/0725.jpg'),
            date:'2021/07/25'

          },
          {
            img:require('@/assets/1226-2.jpg'),
            date:'2021/12/26'

          },
          {
            img:require('@/assets/1226.jpg'),
            date:'2021/12/26'

          },
          {
            img:require('@/assets/05052.jpg'),
            date:'2021/05/05'

          }
        ]
    }),
}
</script>