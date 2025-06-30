<template>
  <div class="row">
    <div class="col-lg-12">
      <!-- <div class="row">
        <div class="col-lg-12 text-right">
          <base-button class="btn-link"> B. Melayu </base-button>
          <base-button class="btn-link"> English </base-button>
          <base-button class="btn-link"> 中文 </base-button>
        </div>
      </div> -->
      <br />
      <br /> 
      <br />
      <br /> 
      <br />  
      <div class="row">
        <div class="col-lg-12 text-center">
          <img src="@/assets/img/Petronas White.png" height="309" width="309" />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 style="font-size: 44px; color: #ffffff; font-weight: bold">
            TERIMA KASIH ATAS MAKLUMBALAS ANDA!
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 style="font-size: 32px; color: #ffffff">
            Aduan Anda Telah Diterima!
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <base-button
            class="btn-success"
            @click="anothercomplaint()"
            style="
              height: 100px; width: 530px; font-size: 50px; color: #ffffff; border-radius: 15px;
            "
            >Buat Aduan Lain</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  
  computed: {},
  methods: {
    anothercomplaint() {
      // this.$router.push("/listofcomplaint");
      this.$router.push("/dashboard")
    },
  },

  created() {},
};
</script>
<style>
.card-title {
  text-align: right;
}
</style>
