<template>
    <div>
      <TheHeader />
  
      <div>
        <div class="row align-items-center">
          <div class="row">
            <div class="col-3">
              
              
            </div>
  
            <div class="col-6">
  
              <router-view>
  
              </router-view>
            </div>
          </div>
        </div>
      </div>
  
  
  
  
    </div>
  </template>
  
  <script >
  
  import TheHeader from '../components/TheHeader.vue'
  
  export default {
    components: {
      TheHeader,
      
    }
  }
  
  </script>
  
  
  