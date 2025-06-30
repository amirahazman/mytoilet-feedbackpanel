<template>
  <div class="row">
    <div class="col-lg-12">
      <div v-if="language == 'malay'">
        <div class="row">
          <div class="col-lg-12 text-left">
            <base-button class="btn-link" @click="back()" style="font-size: 34px"
              ><i class="tim-icons icon-minimal-left"></i> Kembali
            </base-button>
            <!-- <base-button class="btn-link"> English </base-button>
          <base-button class="btn-link"> 中文 </base-button> -->
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="row">
          <div class="col-lg text-center">
            <base-checkbox v-model="a"
              ><img :src="one" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">
              Aktifkan Kipas & <br />
              Sembur Pewangi
            </p>
          </div>
          <div class="col-lg text-center">
            <base-checkbox v-model="b"
              ><img :src="two" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">Tandas Berbau</p>
          </div>
          <div class="col-lg text-center">
            <base-checkbox v-model="c"
              ><img :src="three" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">
              Kehabisan Tisu <br />
              Tandas
            </p>
          </div>
          <div class="col-lg text-center">
            <base-checkbox v-model="d"
              ><img :src="four" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">
              Kehabisan Sabun <br />
              Tangan
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <base-button
              class="btn-success"
              :disabled="dis"
              style="
                height: 100%;
                width: 50%;
                font-size: 63px;
                color: #ffffff;
                border-radius: 15px;
              "
              @click="sendcomplaint()"
              >Hantar Aduan</base-button
            >
          </div>
        </div>
      </div>
      <div v-if="language == 'eng'">
        <div class="row">
          <div class="col-lg-12 text-left">
            <base-button class="btn-link" @click="back()" style="font-size: 34px"
              ><i class="tim-icons icon-minimal-left"></i> Back
            </base-button>
            <!-- <base-button class="btn-link"> English </base-button>
          <base-button class="btn-link"> 中文 </base-button> -->
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg text-center">
            <base-checkbox v-model="a"
              ><img :src="one" width="268" height="290"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">
              Ventilate & Freshen<br />
              Up Toilet
            </p>
          </div>
          <div class="col-lg text-center">
            <base-checkbox v-model="b"
              ><img :src="two" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">Smelly Toilet</p>
          </div>
          <div class="col-lg text-center">
            <base-checkbox v-model="c"
              ><img :src="three" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">Out of Toilet Paper</p>
          </div>
          <div class="col-lg text-center">
            <base-checkbox v-model="d"
              ><img :src="four" width="268" height="280"
            /></base-checkbox>
            <br />
            <br />
            <p style="font-size: 38px">Out of Hand Soap</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <base-button
              class="btn-success"
              :disabled="dis"
              style="
               height: 100%;
                width: 50%;
                font-size: 73px;
                color: #ffffff;
                border-radius: 15px;
              "
              @click="sendcomplaint()"
              >Submit</base-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rate } from "element-ui";
import swal from "sweetalert2";
import moment from "moment";

export default {
  components: {
    [Rate.name]: Rate,
  },
  data() {
    return {
      a: false,
      one: require("@/assets/img/Frangrance Inactive.png"),
      b: false,
      two: require("@/assets/img/Smelly Inactive.png"),
      c: false,
      three: require("@/assets/img/Toilet Paper Inactive.png"),
      d: false,
      four: require("@/assets/img/Handsoap Inactive.png"),
      dis: true,
      gender: "",
      language: "",
    };
  },
  computed: {},
  mounted() {
    // this.$mqtt.subscribe("jkr/#");
  },
  methods: {
    back() {
      this.$router.push("/complaint/" + this.language);
    },
    sendcomplaint() {
      console.log(this.gender);
      console.log(this.a, this.b, this.c, this.d);
      let timenow = moment().unix();
      console.log(timenow);
      let obj = {
        toilet_type_name: this.gender,
        fan_freshener: this.a,
        smell: this.b,
        empty_toilet_roll: this.c,
        empty_handsoap: this.d,
        epoch: timenow,
      };

      console.log(obj);

      this.$http.post(":4771/", obj).then((res) => {
        // if (!res.error) {
        let response = res;
        console.log(response);

        // swal({
        //   title: `Terima kasih diatas aduan yang dibuat. Kami akan mengambil tindakan sewajarnya`,
        //   buttonsStyling: false,
        //   confirmButtonClass: "btn btn-primary",
        //   type: "success",
        //   timer: 2000,
        //   onClose: this.direct(),
        // }).then((result) => {
        //   if (result.value) {
        this.$router.push("/tq/" + this.language);
        //   }
        // });
        // }
      });

      // if (this.a == true) {

      //   let payload = {
      //     namespace: "FEEDBACK",
      //     devtag: "TOILET_F",
      //     button: "9",
      //     id: "9"
      //   };

      //   let obj = {
      //     reported: payload
      //   }

      //   let data = {
      //     state: obj,
      //   };

      //   var json_data = JSON.stringify(data);

      //   console.log("json data " + json_data);
      //   let a = "TOILET_F"

      //  this.$mqtt.publish("$aws/things/" + a +"/shadow/update", json_data);
    },
    // direct() {
    //   this.$router.push("/tq");
    // },
  },
  watch: {
    a() {
      console.log(this.a);
      if (this.a == true) {
        this.one = require("@/assets/img/Frangrance.png");
        this.dis = false;
      } else {
        this.one = require("@/assets/img/Frangrance Inactive.png");

        if (
          this.a == false &&
          this.b == false &&
          this.c == false &&
          this.d == false
        ) {
          this.dis = true;
        }
      }
    },
    b() {
      console.log(this.b);
      if (this.b == true) {
        this.two = require("@/assets/img/smelly.png");
        this.dis = false;
      } else {
        this.two = require("@/assets/img/Smelly Inactive.png");
        if (
          this.a == false &&
          this.b == false &&
          this.c == false &&
          this.d == false
        ) {
          this.dis = true;
        }
      }
    },
    c() {
      console.log(this.c);
      if (this.c == true) {
        this.three = require("@/assets/img/Toilet Paper.png");
        this.dis = false;
      } else {
        this.three = require("@/assets/img/Toilet Paper Inactive.png");
        if (
          this.a == false &&
          this.b == false &&
          this.c == false &&
          this.d == false
        ) {
          this.dis = true;
        }
      }
    },
    d() {
      console.log(this.d);
      if (this.d == true) {
        this.four = require("@/assets/img/Handsoap.png");
        this.dis = false;
      } else {
        this.four = require("@/assets/img/Handsoap Inactive.png");
        if (
          this.a == false &&
          this.b == false &&
          this.c == false &&
          this.d == false
        ) {
          this.dis = true;
        }
      }
    },
     goFirstPage() {
      if (this.language == "malay") {
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/dashboard2");
      }
    },
  },
  created() {
    this.gender = this.$route.params.gender;
    console.log(this.gender);
    this.language = this.$route.params.language;
    console.log(this.language);
    setTimeout(() => {
      this.goFirstPage();
    }, 10000);
  },
};
</script>
<style>
.a {
  float: left;

  width: 25%;
  height: 280px;
}
.b {
  float: left;
  width: 25%;
  height: 280px;
}
.c {
  float: right;
  width: 25%;
  height: 280px;
}

.d {
  float: right;
  width: 25%;
  height: 280px;
}
</style>
