<template>
  
    <nav
      class="main-header navbar navbar-expand bg-white navbar-light border-bottom"
    >
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"
            ><i class="fa fa-bars"></i
          ></a>
        </li>
      </ul>
      <!-- SEARCH FORM -->
      <form class="form-inline ml-3" @submit.prevent="">
        <div class="input-group input-group-sm">
          <input
            class="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-navbar">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="hidden-xs"></span>
          </a>
          <ul class="dropdown-menu dropdown-menu-right">
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-right"></div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>


