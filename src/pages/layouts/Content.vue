<template>
  <div class="content-wrapper">
    <section class="content">
      <!-- Main content -->
      <div class="container">
       
          <router-view></router-view>
        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {};
  },
};
</script>
