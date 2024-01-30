<template>
  <div>
    <TheHeader />

    <div>
      <div class="row align-items-center">
        <div class="row">
          <div class="col-2" style="background-color: antiquewhite;">
            <LeftNar/>
            
          </div>

          <div class="col-10">

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
import LeftNar from '../components/LeftNar.vue'

export default {
  components: {
    TheHeader,
    LeftNar
  }
}

</script>


