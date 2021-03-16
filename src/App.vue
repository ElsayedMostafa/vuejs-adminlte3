<template>
  <div id="app">
     <app-header></app-header>
     <side-bar></side-bar>
     <app-content></app-content>
     <app-footer></app-footer>

  </div>
</template>

<script>
import AppHeader from './pages/layouts/Header';
import SideBar from './pages/layouts/Sidebar';
import AppContent from './pages/layouts/Content';
import AppFooter from './pages/layouts/Footer';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppContent,
    SideBar
  }

}
</script>

<style src="@/static/adminlte/css/adminlte.min.css"></style>


