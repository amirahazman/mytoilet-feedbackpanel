<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-12 text-right">
          <base-button class="btn-link" style="font-size: 24px">
            B. Melayu
          </base-button>
          <base-button class="btn-link" style="font-size: 24px">
            English
          </base-button>
          <!-- <base-button class="btn-link" style="font-size: 24px;"> 中文 </base-button> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <p style="font-size: 48px; color: #ffffff">
            Maklumbalas anda, kami hargai!
          </p>
        </div>
        <div class="col-lg-12 text-center">
          <p style="font-size: 28px; color: #ffffff">Sila pilih icon</p>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-lg-6 text-center">
          <base-button class="btn-link" @click="complaint('male')"
            ><img src="@/assets/img/jate.png" width="280" height="288"
          /></base-button>
          <br />
          <br />
          <br />
          <h6 style="font-size: 28px; color: #ffffff">TERAKHIR DIBERSIHKAN</h6>
          <p style="font-size: 28px">{{ manlast }} min lalu</p>
          <br />
          <h6 style="font-size: 28px; color: #ffffff">TOLERANSI BAU</h6>
          <div style="font-size: 30px; !important">
            <el-rate v-model="value1" disabled text-color="#fdb924"> </el-rate>
          </div>
          <br />
          <h6 style="font-size: 28px; color: #ffffff">BILANGAN PENGGUNA</h6>
          <p style="font-size: 28px">{{ mancount }} orang</p>
        </div>
        <div class="col-lg-6 text-center">
          <base-button class="btn-link" @click="complaint('female')"
            ><img src="@/assets/img/tino.png" width="280" height="288"
          /></base-button>
          <br />
          <br />
          <br />
          <h6 style="font-size: 28px; color: #ffffff">TERAKHIR DIBERSIHKAN</h6>
          <p style="font-size: 28px">{{ womanlast }} min lalu</p>
          <br />
          <h6 style="font-size: 28px; color: #ffffff">TOLERANSI BAU</h6>
          <el-rate
            style="font-size: 28px"
            v-model="value2"
            disabled
            text-color="#fdb9240"
          >
          </el-rate>
          <br />
          <h6 style="font-size: 28px; color: #ffffff">BILANGAN PENGGUNA</h6>
          <p style="font-size: 28px">{{ womancount }} orang</p>
        </div>
        <!-- <div class="col-lg-4 text-center">
          <base-button class="btn-link" @click="complaint()"
            ><img src="@/assets/img/oku.png" width="280" height="288"
          /></base-button>
          <br />
          <br />
          <br />
          <h6 style="font-size: 28px; color: #ffffff">TERAKHIR DIBERSIHKAN</h6>
          <p style="font-size: 28px;">{{ disablelast }}min lalu</p>
          <br />
          <h6 style="font-size: 28px; color: #ffffff">TOLERANSI BAU</h6>
          <el-rate style="font-size: 28px;" v-model="value3" disabled text-color="#fdb9240"> </el-rate>
          <br />
          <h6 style="font-size: 28px; color: #ffffff">BILANGAN PENGGUNA</h6>
          <p style="font-size: 28px;">{{ disablecount }} orang</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Rate } from "element-ui";

export default {
  components: {
    [Rate.name]: Rate,
  },
  data() {
    return {
      manlast: 0,
      womanlast: 0,
      disablelast: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      mancount: 0,
      womancount: 0,
      disablecount: 0,
    };
  },
  computed: {},
  methods: {
    complaint(gender) {
      console.log(gender)

      this.$router.push("/listofcomplaint/"+ gender);
    },
    getData() {
      this.$http.get(":4771/data").then((res) => {
        if (!res.error) {
          let response = res;
          console.log(response);

          if (response.male.last_cleaned == null) {
            response.male.last_cleaned = "N/A";
          }
          if (response.female.last_cleaned == null) {
            response.female.last_cleaned = "N/A";
          }

          
          if (response.male.people_in_since_last_clean == 0) {
            console.log("msn")
            response.male.people_in_since_last_clean = 0;
          }
          if (response.female.people_in_since_last_clean == 0) {
            console.log("msns")
            response.female.people_in_since_last_clean = 0;
          }

          this.manlast = response.male.last_cleaned;
          this.womanlast = response.female.last_cleaned;
          this.value1 = response.male.air_quality;
          this.value2 = response.female.air_quality;
          this.mancount = response.male.people_in_since_last_clean;
          this.womancount = response.female.people_in_since_last_clean;
        } else {
          console.log(res);
        }
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>
<style>
.leftbox {
  float: left;
  width: 25%;
  height: 280px;
}
.middlebox {
  float: left;
  width: 50%;
  height: 280px;
}
.rightbox {
  float: right;
  width: 25%;
  height: 280px;
}
</style>
