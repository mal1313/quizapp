<template>
  <v-app>
    <v-content>
      <v-toolbar color="blue">
        <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      </v-toolbar>
      <router-view />
    </v-content>
  </v-app>
</template>