<template>
  <v-container>
      <v-row>
      <v-col justify="center" align="center">
        <h1>ゲームのルール説明</h1>
        <p style="font-size:20px">本日のゲームは、、<strong>「1年記念日クイズ」</strong>です！</p>
      </v-col>
      </v-row>
      <v-row>
          <v-col justify="center" align="center">
        <p>Ⅰ、正解すると<b>ポイント</b>がもらえます</p>
        <p>Ⅱ、問題は全部で<b>10問</b>です！</p>
        <p>Ⅲ、ポイントにより<b>もらえるプレゼント</b>が変わります！</p>
        <p>Ⅳ、あなたの愛と実力が試されます</p>
          </v-col>
      </v-row>
      <v-row>
          <v-col justify="center" align="center">
              <p style="font-size:20px">
                それではスタ―――――ト！！！！
              </p>
          </v-col>
      </v-row>
      <v-col justify="center" align="center">
        <v-btn rounded color="primary" dark class="mt-5 pa-5" x-large><router-link to="/list" style="text-decoration: none; color:white" >START</router-link></v-btn>
        <p><router-link to="/">Go to Home</router-link></p>
        </v-col>
  </v-container>
</template>
