<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <v-expansion-panel class="noshadow">
          <v-expansion-panel-content>
            <template v-slot:header>
              <div><i class="fas fa-exclamation-triangle" :link="{name: 'Recursos', path: '/recurso'}"></i> Recurso </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Novo Recurso', path: '/novo_recurso'}"/>
            </div>
            <div>
              <sidebar-item :link="{name: 'Listar Recursos', path: '/listar_recurso'}"/>
            </div>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div><i class="fas fa-info-circle"></i> Sobre </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Sobre a Aplicação', path: '/sobre'}"/>
            </div>
          </v-expansion-panel-content>
          
        </v-expansion-panel>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">

.noshadow{
  -webkit-box-shadow: none !important;
	-moz-box-shadow: none !important;
  box-shadow: none !important;
  border: none !important;
}

li{
  border: none !important;
}
</style>
