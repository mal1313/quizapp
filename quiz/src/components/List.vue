<template>
  <v-container>
      <v-row>
      <v-col justify="center" align="center">
        <h1 class="rule" style="font-family: 'M PLUS 1p';">ゲームのルール説明</h1>
        <p style="font-size:20px; font-family: 'M PLUS 1p';" >本日のゲームは、、<strong>「1年記念日クイズ」</strong>です！</p>
      </v-col>
      </v-row>
      <v-row justify="center" align="center">
          <v-col cols=6 justify="center" align="left">
        <p style="font-family: 'M PLUS 1p';">Ⅰ、正解すると<b>ポイント</b>がもらえます</p>
        <p style="font-family: 'M PLUS 1p';">Ⅱ、問題は全部で<b>10問</b>です！</p>
        <p style="font-family: 'M PLUS 1p';">Ⅲ、正解数により<b>もらえるプレゼント</b>が変わります！</p>
        <p style="font-family: 'M PLUS 1p';">Ⅳ、あなたの愛と実力が試されます</p>
          </v-col>
      </v-row>
      <v-row>
          <v-col justify="center" align="center">
              <p style="font-size:50px; font-family: 'Nikukyu';">
                はじめるよ
              </p>
          </v-col>
      </v-row>
      <v-col justify="center" align="center">
        <v-btn rounded color="primary" dark class="mt-5 pa-5" x-large><router-link to="/qua1" style="text-decoration: none; color:white" >START</router-link></v-btn>
        </v-col>
  </v-container>
</template>
