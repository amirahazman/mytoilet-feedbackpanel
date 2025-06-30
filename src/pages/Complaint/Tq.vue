<template>
  <div class="row">
    <div class="col-lg-12">
     <div v-if="language == 'malay'">
      <br />
      <br /> 
      <br />
      <br /> 
      <br />  
      <div class="row">
        <div class="col-lg-12 text-center">
          <img src="@/assets/img/Petronas White.png" height="329" width="329" />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 style="font-size: 82px; color: #ffffff; font-weight: bold">
            TERIMA KASIH ATAS MAKLUMBALAS ANDA!
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 style="font-size: 75px; color: #ffffff">
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
              height: 100%;
                width: 60%; font-size: 65px; color: #ffffff; border-radius: 15px;
            "
            >Buat Aduan Lain</base-button
          >
        </div>
      </div>
     </div>
     <div v-if="language == 'eng'">
        <br />
      <br /> 
      <br />
      <br /> 
      <br />  
      <div class="row">
        <div class="col-lg-12 text-center">
          <img src="@/assets/img/Petronas White.png" height="319" width="319" />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 style="font-size: 82px; color: #ffffff; font-weight: bold">
            THANK YOU FOR YOUR FEEDBACK!
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 style="font-size: 75px; color: #ffffff">
            Your Complaint Has Been Successfully Submitted
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <base-button
            class="btn-success"
            @click="anothercomplaint()"
            style="
              height: 100%;
                width: 60%;
                font-size: 65px; color: #ffffff; border-radius: 15px;
            "
            >Submit Another Complaint</base-button
          >
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      language:""
    };
  },
  
  computed: {},
  methods: {
    anothercomplaint() {
      // this.$router.push("/listofcomplaint");
      if(this.language == 'malay'){
        this.$router.push("/dashboard")
      } else {
        this.$router.push("/dashboard2")
      }
      
    },
  },

  created() {
    this.language = this.$route.params.language;
    console.log(this.language);
  },
};
</script>
<style>
.card-title {
  text-align: right;
}
</style>
