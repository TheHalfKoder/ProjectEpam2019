<template>
  <div id="app" class="app-main">
    <app-header/>
    <div class="app-content-wrapper">
      <div class="app-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/app-header';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
  html, body {
    height: 100%;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

.app-main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

.app-content-wrapper {
  overflow: auto;
  flex: 1 0 0px;
  max-height: 100%;
}

.app-content {
  width: 75%;
  margin: 0 auto;
}

.page-link {
    color: #f38524;
  }

.page-item.active .page-link {
  background-color: #f38524;
  border-color: #f38524;
}

.page-link:hover {
  color: #01afb0;
}

.modal-open .modal {
  z-index: 1072;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
}

.btn-secondary {
  background-color: #01afb0;
  border: 1px solid #01afb0;
}

.btn-secondary:hover {
  background-color: #f38524;
  border: 1px solid #f38524;
}

.btn-primary {
  background-color: #f38524;
  border: 1px solid #f38524;
}

.btn-primary:hover {
  background-color: #01afb0;
  border: 1px solid #01afb0;
}

</style>
