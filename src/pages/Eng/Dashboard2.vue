<template>
  <div class="row">
    <div class="col-lg-12">
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
      
      <div v-if="view == 'first'">
        <br />
       <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <img
              src="@/assets/img/Petronas White.png"
              height="329"
              width="329"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div
            class="col-lg-12 text-center"
            style="border-bottom: 2px solid #ffffff"
          ></div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 92px; color: #ffffff">TOILET FEEDBACK</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 85px; color: #ffffff">
              Help us to keep you happy!
            </h1>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <base-button
              class="btn-success"
              @click="start()"
              style="
                height: 80%;
                width: 30%;
                font-size: 85px;
                color: #ffffff;
                border-radius: 15px;
              "
              >Let's Begin</base-button
            >
          </div>
        </div>
      </div>
      <div v-if="view == 'second'">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 90px; color: #ffffff">
              ID {{ cleanerid }} CHECKED IN
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 83px; color: #ffffff">
              Check In {{ checkintime }}
            </h1>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <base-button
              class="btn-success"
              @click="view = 'third'"
              style="
                height: 80%;
                width: 30%;
                font-size: 43px;
                color: #ffffff;
                border-radius: 15px;
              "
              >Choose Toilet</base-button
            >
          </div>
        </div>
      </div>
      <div v-if="view == 'third'">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p style="font-size: 48px; color: #ffffff">Sila pilih tandas</p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg text-center">
            <base-button class="btn-link" @click="sendData('male')"
              ><img src="@/assets/img/jate.png" width="300" height="300"
            /></base-button>
          </div>
          <div class="col-lg text-center">
            <base-button class="btn-link" @click="sendData('female')"
              ><img src="@/assets/img/tino.png" width="300" height="300"
            /></base-button>
          </div>
        </div>
      </div>
      <div v-if="view == 'fourth'">
        <br />
        <br />

        <div class="row">
          <div class="col-lg-12 text-center">
            <img src="@/assets/img/Tick Icon.png" width="270" />
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 90px; color: #ffffff">
              SILA MULAKAN KERJA PEMBERSIHAN
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 83px; color: #ffffff">
              Waktu Mula Pembersihan {{ checkintime }}
            </h1>
          </div>
        </div>
        <br />
      </div>
      <div v-if="view == 'fifth'">
        <br />
        <br />

        <div class="row">
          <div class="col-lg-12 text-center">
            <img src="@/assets/img/Tick Icon.png" width="270" />
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 90px; color: #ffffff">
              ID {{ cleanerid }} DAFTAR KELUAR
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 83px; color: #ffffff">
              Waktu Daftar Keluar {{ checkouttime }}
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 style="font-size: 83px; color: #ffffff">
              Tempoh Pembersihan {{ duration }}
            </h1>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "src/components";
import swal from "sweetalert2";
import moment from "moment";
import { Rate } from "element-ui";

export default {
  components: {
    Modal,
    [Rate.name]: Rate,
  },
  data() {
    return {
      socket: null,
      modals: {
        cleanerwindow: false,
      },
      tag_id: "",
      tag_name: "",
      view: "first",
      cleanerid: "",
      checkintime: "",
      checkouttime: "",
      duration: "",
      language: "eng",
    };
  },
  computed: {},
  methods: {
    detectLanguage(lang) {
      console.log(lang);

      if(lang == "malay"){
        console.log(lang)
        this.$router.push("/dashboard")
        
      }
      
     
    },
    start() {
      this.$router.push("/complaint/"+this.language);
      // this.$root.$emit("language", this.language);
    },
    scan() {
      // console.log("scannnnn!!!", toilettype);
      console.log(process.env.VUE_APP_WS_URL + ":8765");
      this.socket = new WebSocket(process.env.VUE_APP_WS_URL + ":8765");

      console.log(this.socket);
      this.socket.onopen = () => {
        this.status = "connected";

        let currentFilter = {};
        let a = JSON.stringify(currentFilter);
        console.log(a);
        this.socket.send(a);
      };

      this.socket.onmessage = ({ data }) => {
        this.parseData(data);
      };

      return this.socket;
    },
    sendData(toilettype) {
      console.log(toilettype);
      let currentFilter = { toilet_type_name: toilettype };
      let a = JSON.stringify(currentFilter);
      console.log(a);
      this.socket.send(a);

      this.socket.onmessage = ({ data }) => {
        this.parseData(data);
      };

      return this.socket;
    },
    // next(da) {
    //   console.log(da);
    //   let temp = JSON.parse(da);
    // },
    parseData(data) {
      console.log(data);

      if (data == "connected") {
      } else {
        let temp = JSON.parse(data);

        console.log(temp);
        // console.log(temp.end_session);

        if (temp.error == null) {
          this.view = "fourth";
          this.checkintime = moment().format("hh:mm a");
          setTimeout(() => (this.view = "first"), 10000);
        }

        if (temp.start_session == true) {
          this.cleanerid = temp.tag_id;
          this.checkintime = moment().format("hh:mm a");

          this.view = "second";
          // this.modals.cleanerwindow = true;
        }

        if (temp.error == "timeout") {
          this.view = "first";
          swal({
            title: "Alert!",
            text: temp.error,
            type: "warning",
            confirmButtonClass: "btn btn-info btn-fill",
            buttonsStyling: false,
          });
        }

        if (temp.end_session == true) {
          this.cleanerid = temp.tag_id;
          this.checkouttime = moment().format("hh:mm a");
          this.duration = temp.duration;

          this.view = "fifth";
          console.log(this.view);
          setTimeout(() => (this.view = "first"), 10000);
        }

        console.log(this.view);
      }
    },
    // wait() {
    //   this.view = "first";
    //   console.log(this.view);
    // },
  },
  watch: {},
  created() {
    this.scan();
  },
  beforeDestroy() {
    console.log("SOCKS_CLOSED");
    this.socket.close();
  },
};
</script>
<style>
.card-title {
  text-align: right;
}
</style>
