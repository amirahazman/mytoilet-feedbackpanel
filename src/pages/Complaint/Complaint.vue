<template>
  <div class="row">
    <div class="col-lg-12">
      <div v-if="language == 'malay'">
        <div class="row">
          <div class="col-lg-12 text-right">
            <base-button
              class="btn-link"
              style="font-size: 34px"
              @click="detectLanguage('malay')"
            >
              B. Melayu
            </base-button>
            <base-button
              class="btn-link"
              style="font-size: 34px"
              @click="detectLanguage('eng')"
            >
              B. Inggeris
            </base-button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <p style="font-size: 58px; color: #ffffff">
              Maklumbalas anda, kami hargai!
            </p>
          </div>
          <div class="col-lg-12 text-center">
            <p style="font-size: 38px; color: #ffffff">Sila pilih icon</p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-6 text-center">
            <base-button class="btn-link" @click="complaint('male')"
              ><img src="@/assets/img/jate.png" width="290" height="290"
            /></base-button>
            <br />
            <br />
            <br />
            <h6 style="font-size: 38px; color: #ffffff">
              TERAKHIR DIBERSIHKAN
            </h6>
            <p style="font-size: 38px">{{ manlast }} min lalu</p>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">TOLERANSI BAU</h6>
            <div style="font-size: 40px; !important">
              <el-rate
                :value="value1"
                v-model="value1"
                disabled
                text-color="#fdb924"
              >
              </el-rate>
            </div>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">BILANGAN PENGGUNA</h6>
            <p style="font-size: 38px">{{ mancount }} orang</p>
          </div>
          <div class="col-lg-6 text-center">
            <base-button class="btn-link" @click="complaint('female')"
              ><img src="@/assets/img/tino.png" width="290" height="290"
            /></base-button>
            <br />
            <br />
            <br />
            <h6 style="font-size: 38px; color: #ffffff">
              TERAKHIR DIBERSIHKAN
            </h6>
            <p style="font-size: 38px">{{ womanlast }} min lalu</p>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">TOLERANSI BAU</h6>
            <el-rate
              style="font-size: 38px"
              :value="value2"
              v-model="value2"
              disabled
              text-color="#fdb9240"
            >
            </el-rate>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">BILANGAN PENGGUNA</h6>
            <p style="font-size: 38px">{{ womancount }} orang</p>
          </div>
        </div>
      </div>
      <div v-if="language == 'eng'">
        <div class="row">
          <div class="col-lg-12 text-right">
            <base-button
              class="btn-link"
              style="font-size: 34px"
              @click="detectLanguage('malay')"
            >
              Malay
            </base-button>
            <base-button
              class="btn-link"
              style="font-size: 34px"
              @click="detectLanguage('eng')"
            >
              English
            </base-button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <p style="font-size: 58px; color: #ffffff">
              We appreciate your feedback!
            </p>
          </div>
          <div class="col-lg-12 text-center">
            <p style="font-size: 38px; color: #ffffff">Please select an icon</p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-6 text-center">
            <base-button class="btn-link" @click="complaint('male')"
              ><img src="@/assets/img/jate.png" width="290" height="290"
            /></base-button>
            <br />
            <br />
            <br />
            <h6 style="font-size: 38px; color: #ffffff">LAST CLEANED</h6>
            <p style="font-size: 38px">{{ manlast }} mins ago</p>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">ODOR TOLERANCE</h6>
            <div style="font-size: 40px; !important">
              <el-rate
                :value="value1"
                v-model="value1"
                disabled
                text-color="#fdb924"
              >
              </el-rate>
            </div>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">NO. OF USERS</h6>
            <p style="font-size: 38px">{{ mancount }} users</p>
          </div>
          <div class="col-lg-6 text-center">
            <base-button class="btn-link" @click="complaint('female')"
              ><img src="@/assets/img/tino.png" width="290" height="290"
            /></base-button>
            <br />
            <br />
            <br />
            <h6 style="font-size: 38px; color: #ffffff">LAST CLEANED</h6>
            <p style="font-size: 38px">{{ womanlast }} mins ago</p>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">ODOR TOLERANCE</h6>
            <el-rate
              style="font-size: 38px"
              :value="value2"
              v-model="value2"
              disabled
              text-color="#fdb9240"
            >
            </el-rate>
            <br />
            <h6 style="font-size: 38px; color: #ffffff">NO. OF USER</h6>
            <p style="font-size: 38px">{{ womancount }} users</p>
          </div>
        </div>
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
      language: "",
    };
  },
  computed: {},
  methods: {
    detectLanguage(lang) {
      console.log(lang);
      this.language = lang;
    },
    complaint(gender) {
      console.log(gender);

      this.$router.push("/listofcomplaint/" + gender + "/" + this.language);
    },
    getData() {
      console.log("woi");
      this.$http.get(":4771/data").then((res) => {
        // if (!res.error) {
        let response = res;
        console.log(response.female);
        console.log(response.female.air_quality);
        console.log(response.female.last_cleaned);
        console.log(response.female.people_in_since_last_clean);
        this.assignData(response);

        // } else {
        //   console.log(res);
        // }
      });
    },
    assignData(data) {
      console.log(data);
      let f_lastclean = data.female.last_cleaned;
      let m_lastclean = data.male.last_cleaned;

      if (data.hasOwnProperty("male")) {
        if (data.male.last_cleaned == null) {
          m_lastclean = "N/A";
        }
        if (data.female.last_cleaned == null) {
          f_lastclean = "N/A";
        }

        if (data.male.people_in_since_last_clean == 0) {
          console.log("msn");
          data.male.people_in_since_last_clean = 0;
        }
        this.manlast = m_lastclean;
        this.value1 = data.male.air_quality;
        this.mancount = data.male.people_in_since_last_clean;
      }

      if (data.hasOwnProperty("female")) {
        if (data.female.last_cleaned == null) {
          m_lastclean = "N/A";
        }
        if (data.female.last_cleaned == null) {
          f_lastclean = "N/A";
        }
        if (data.female.people_in_since_last_clean == 0) {
          console.log("msns");
          data.female.people_in_since_last_clean = 0;
        }

        this.womanlast = f_lastclean;
        this.value2 = data.female.air_quality;
        this.womancount = data.female.people_in_since_last_clean;
      }

      console.log("ok");
      console.log(
        this.manlast,
        this.womanlast,
        this.value1,
        this.value2,
        this.mancount,
        this.womancount
      );
    },
    goFirstPage() {
      if (this.language == "malay") {
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/dashboard2");
      }
    },
  },
  watch: {
    language() {
      console.log(this.language);
    },
  },
  created() {
    this.language = this.$route.params.language;
    console.log(this.language);
    this.getData();

    setTimeout(() => {
      this.goFirstPage();
    }, 10000);
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
