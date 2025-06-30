<template>
  <div class="row">
    <div class="col-lg-12">
      <div v-if="role == 'user'">
        <div v-if="view == 'first'" @click="view = 'second'">
          <div id="myPic">
            <img src="@/assets/video/DiPEC PPJ.gif" width="1280" height="720" />
          </div>
        </div>
        <div v-if="view == 'second'">
          <div id="myPic">
            <img src="@/assets/img/background.png" width="1280" height="720" />
          </div>
          <div class="row">
            <div class="col-lg text-right" style="right: 20px">
              <img src="@/assets/img/ppj logo.png" width="120" />
            </div>
          </div>
          
          
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 63px; color: #767777">
                Please choose your language
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 50px; color: #000000">
                <i>Sila pilih bahasa</i>
              </h1>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-lg text-right">
              <base-button class="btn-link" @click="detectLanguage('malay')">
                <img src="@/assets/img/my.png" width="180" />
              </base-button>
            </div>

            <div class="col-lg text-left">
              <base-button class="btn-link" @click="detectLanguage('eng')">
                <img src="@/assets/img/uk.png" width="180" />
              </base-button>
            </div>
          </div>
        </div>

        <div v-if="view == 'fourth'">
          <div id="myPic">
            <img src="@/assets/img/background.png" width="1280" height="720" />
          </div>
          <div class="row">
            <div class="col-lg text-left">
              <base-button
                class="btn-xl btn-primary"
                @click="view = 'second'"
                >{{ $t("sidebar.btnback") }}</base-button
              >
            </div>
            <div class="col-lg text-right" style="right: 20px">
              <img src="@/assets/img/ppj logo.png" width="120" />
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-lg-12 text-center">
              <p style="font-size: 38px; color: #767777">
                {{ $t("sidebar.title3") }}
              </p>
            </div>
          </div>
          <br />
          <br /><br />

          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="row">
                <div class="col-lg">
                  <base-button class="btn-link" @click="sendDetail(1)"
                    ><img src="@/assets/img/Happy copy.png" width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.happy") }}
                  </p>
                </div>

                <div class="col-lg">
                  <base-button class="btn-link" @click="sendDetail(2)"
                    ><img src="@/assets/img/Memuaskan copy 1.png" width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.satisfied") }}
                  </p>
                </div>

                <div class="col-lg">
                  <base-button class="btn-link" @click="sendDetail(3)"
                    ><img
                      src="@/assets/img/Kurang memuaskan copy.png"
                      width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.unsatisfied") }}
                  </p>
                </div>

                <div class="col-lg">
                  <base-button class="btn-link" @click="sendDetail(4)"
                    ><img
                      src="@/assets/img/Kurang gembira copy.png"
                      width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.nothappy") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <br />
        </div>
        <div v-if="view == 'fifth'">
          <div id="myPic">
            <img src="@/assets/img/background.png" width="1280" height="720" />
          </div>
          <div class="row">
            <div class="col-lg text-left">
              <base-button
                class="btn-xl btn-primary"
                @click="view = 'fourth'"
                >{{ $t("sidebar.btnback") }}</base-button
              >
            </div>
            <div class="col-lg text-right" style="right: 20px">
              <img src="@/assets/img/ppj logo.png" width="120" />
            </div>
          </div>
        
          <br />
          <div class="row">
            <div class="col-lg-12 text-center">
              <p style="font-size: 38px; color: #767777">
                {{ $t("sidebar.title4") }}
              </p>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="row">
                <div class="col-lg">
                  <base-button
                    class="btn-link"
                    @click="sendComplaint(1, 'smelly')"
                    ><img src="@/assets/img/Smelly 1.png" width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.smelly") }}
                  </p>
                </div>

                <div class="col-lg">
                  <base-button
                    class="btn-link"
                    @click="sendComplaint(2, 'tissue')"
                    ><img src="@/assets/img/Out of supplies 2.png" width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.tissue") }}
                  </p>
                </div>

                <div class="col-lg">
                  <base-button
                    class="btn-link"
                    @click="sendComplaint(3, 'wetfloor')"
                    ><img src="@/assets/img/Slippery 1.png" width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.slippery") }}
                  </p>
                </div>

                <div class="col-lg">
                  <base-button
                    class="btn-link"
                    @click="sendComplaint(4, 'plumber')"
                    ><img src="@/assets/img/Plumbing issue 1.png" width="180"
                  /></base-button>
                  <p style="font-size: 38px; color: #767777">
                    {{ $t("sidebar.plumber") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <br />
        </div>
        <div v-if="view == 'sixth'">
          <div id="myPic">
            <img src="@/assets/img/background.png" width="1280" height="720" />
          </div>
          <div class="row">
            <div class="col-lg text-right" style="right: 20px">
              <img src="@/assets/img/ppj logo.png" width="120" />
            </div>
          </div>
       
         
          <br />

          <div class="row" v-if="flag == 'smelly'">
            <div class="col-lg-12 text-center">
              <img src="@/assets/img/Ventilation 1.png" width="180" />
            </div>
          </div>
          <div
            class="row"
            v-if="
              flag == 'tissue' ||
              flag == 'plumber' ||
              flag == 'general' ||
              flag == 'wetfloor'
            "
          >
            <div class="col-lg-12 text-center">
              <img src="@/assets/img/tick 2.png" width="180" />
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 38px; color: #767777">
                {{ $t("sidebar.thank") }}
              </h1>
            </div>
          </div>

          <div class="row" v-if="flag == 'smelly'">
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 38px; color: #000000">
                {{ $t("sidebar.smellymsg1") }}
              </h1>
              <h1 style="font-size: 38px; color: #000000">
                {{ $t("sidebar.smellymsg2") }}
              </h1>
            </div>
          </div>

          <div class="row" v-if="flag == 'tissue' || flag == 'plumber'">
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 38px; color: #000000">
                {{ $t("sidebar.tissuemsg1") }}
              </h1>
              <h1 style="font-size: 38px; color: #000000">
                {{ $t("sidebar.tissuemsg2") }}
              </h1>
            </div>
          </div>

          <div class="row" v-if="flag == 'general' || flag == 'wetfloor'">
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 38px; color: #000000">
                {{ $t("sidebar.generalmsg1") }}
              </h1>
            </div>
            <div class="col-lg-12 text-center">
              <h1 style="font-size: 38px; color: #000000">
                {{ $t("sidebar.generalmsg2") }}
              </h1>
            </div>
          </div>

          <br />
        </div>
      </div>

      <div v-if="role == 'cleaner'" id="output">
        <div>
          <div id="myPic">
            <img src="@/assets/img/background.png" width="1280" height="720" />
          </div>
          <div class="row">
            <div class="col-lg text-right" style="right: 20px">
              <img src="@/assets/img/ppj logo.png" width="150" />
            </div>
          </div>

          <div class="row" v-if="!loading">
            <div class="col-lg-4 text-center">
              <div style="position: fixed; bottom: 0; width: 100%; left: 4%">
                <div style="position: absolute; bottom: 0">
                  <img
                    src="@/assets/img/cleaner-background.png"
                    width="500"
                    height="650"
                  />
                </div>

                <div>
                  <div style="position: absolute; bottom: 0; left: 5.5%">
                    <img
                      :src="cleanerimage"
                      style="
                        width: 350px;
                        min-width: 350px;
                        max-width: 350px;
                        height: 350px;
                        min-height: 350px;
                        max-height: 350px;

                        border-radius: 100% 100% 100% 100%;
                      "
                    />
                    <br />
                    <br />
                    <br />

                    <p
                      style="font-size: 45px; color: #00b1ff; font-weight: 600"
                    >
                      {{ $t("sidebar.welcome") }}
                    </p>

                    <p
                      style="
                        font-size: 45px;
                        color: #000000;
                        font-weight: 600;
                        line-height: 1em;
                      "
                    >
                      {{ cleanername }}
                    </p>
                    <p
                      style="
                        font-size: 30px;
                        color: #000000;
                        padding-bottom: 30px;
                        line-height: 2em;
                      "
                    >
                      <i> {{ cleanerid }}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8" style="left: 15%">
              <!-- clocked in -->
              <div class="row">
                <div class="col-lg">
                  <p style="font-size: 40px; color: #767777; font-weight: 600">
                    Clocked {{ clockinflag }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg">
                  <p style="font-size: 20px; color: #000000">
                    {{ clockedin }}
                  </p>
                </div>
              </div>
              <br />
              <!-- user review -->
              <div class="row">
                <div class="col-lg">
                  <p style="font-size: 20px; color: #767777; font-weight: 600">
                    Today's User Review
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg text-center">
                  <img src="@/assets/img/Happy copy.png" width="70" />
                  <p
                    style="font-size: 20px; color: #000000; text-align: center"
                  >
                    {{ happy }}
                  </p>
                </div>
                <div class="col-lg text-center">
                  <img src="@/assets/img/Memuaskan copy 1.png" width="70" />
                  <p
                    style="font-size: 20px; color: #000000; text-align: center"
                  >
                    {{ moderate }}
                  </p>
                </div>
                <div class="col-lg text-center">
                  <img
                    src="@/assets/img/Kurang memuaskan copy.png"
                    width="70"
                  />
                  <p style="font-size: 20px; color: #000000">
                    {{ sad }}
                  </p>
                </div>
                <div class="col-lg text-center">
                  <img src="@/assets/img/Kurang gembira copy.png" width="70" />
                  <p style="font-size: 20px; color: #000000">
                    {{ mad }}
                  </p>
                </div>
                <div class="col-lg-4"></div>
              </div>
              <br />
              <!-- most common complaint -->
              <div class="row">
                <div class="col-lg">
                  <p style="font-size: 20px; color: #767777; font-weight: 600">
                    Today's Most Common Complaints
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg text-left">
                  <p style="font-size: 20px; color: #000000">
                    {{ mostcommoncomplaint }}
                  </p>
                </div>
              </div>
              <br />
              <!-- cleaning performance -->
              <div class="row">
                <div class="col-lg">
                  <p style="font-size: 20px; color: #767777; font-weight: 600">
                    Today's Cleaning Performance
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 text-left">
                  <p style="font-size: 20px; color: #000000">
                    How many times cleaned
                  </p>
                </div>
                <div class="col-lg text-left">
                  <p style="font-size: 20px; color: #000000">
                    : {{ timecleaning }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 text-left">
                  <p style="font-size: 20px; color: #000000">Duration</p>
                </div>
                <div class="col-lg text-left">
                  <p style="font-size: 20px; color: #000000">
                    : {{ durationcleaning }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="d-flex justify-content-center spinner"
            v-if="loading"
            style="padding-top: 20%"
          >
            <circle-4
              style="width: 110px; height: 110px; z-index: 999"
            ></circle-4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "src/components";
import swal from "sweetalert2";
import moment from "moment";
import { Rate } from "element-ui";
import { Circle4 } from "vue-loading-spinner";


export default {
  components: {
    Modal,
    [Rate.name]: Rate,
    Circle4,
  },
  data() {
    return {
      loading: false,
      interval: null,
      cleanerimage:
        // "https://smart-toilet.s3.ap-southeast-1.amazonaws.com/profileImg/7a1c3658-d58b-46ca-6935-6a0835477b69.png",
        require("@/assets/img/syakira.png"),
      toilettype: 0,
      react: 0,
      reason: 0,

      clockinflag: "out",
      // clockinflag: "in",
      timecleaning: 3,
      durationcleaning: "00:40:15",
      mostcommoncomplaint: "Wet Floor - Female Toilet",
      clockedin: "2:03 pm",
      happy: 10,
      moderate: 8,
      sad: 3,
      mad: 1,
      role: "user",
      cleanername: "SYAKIRA",
      cleanerid: "67189383",

      socket: null,
      modals: {
        cleanerwindow: false,
      },
      tag_id: "",
      tag_name: "",
      view: "first",
      // cleanerid: "",
      checkintime: "",
      checkouttime: "",
      duration: "",
      language: "malay",
    };
  },
  computed: {},
  methods: {
    callapi() {
      console.log(this.toilettype);
      console.log(this.react);
      console.log(this.reason);
      // let male = 1
      // let female = 2
      this.$http
        .get(":8080/api/fp/1" + "/" + this.react + "/" + this.reason)
        .then((res) => {
          if (!res.error) {
            let response = res.message;
            console.log(response);
            setTimeout(() => {
              this.view = "first";
            }, 5000);
          }
        });
    },
    sendComplaint(flag, desc) {
      this.flag = desc;
      console.log(desc);
      this.reason = flag;
      this.view = "sixth";
      this.callapi();
    },
    sendDetail(flag) {
      console.log(flag);
      this.react = flag;
      if (this.react == 1) {
        this.reason = 0;
        this.view = "sixth";
        this.flag = "general";
        this.callapi();
      } else {
        this.view = "fifth";
      }
    },
    sendData(toilettype) {
      console.log(toilettype);
      this.toilettype = toilettype;
      this.view = "fourth";
    },
    detectLanguage(lang) {
      console.log(lang);

      if (lang == "eng") {
        this.$i18n.locale = "en";
      }

      if (lang == "malay") {
        this.$i18n.locale = "my";
      }

      this.view = "fourth";
    },
    start() {
      this.$router.push("/complaint/" + this.language);
      // this.$root.$emit("language", this.language);
    },

    parseData(data) {
      console.log(data);
      this.cleanerimage = data.ImageS3Path;
      // "https://smart-toilet.s3.ap-southeast-1.amazonaws.com/profileImg/7a1c3658-d58b-46ca-6935-6a0835477b69.png";

      // tarik mana
      this.clockinflag = data.FlagInOut;
      // mana yang mana
      this.happy = data.HappyCount;
      this.moderate = data.SatisfiedCount;
      this.sad = data.NotSatisfiedCount;
      this.mad = data.NotHappyCount;
      this.mostcommoncomplaint = data.CommonComplaints;
      // tarik mana
      this.clockedin = moment().format("hh:mm a");
      this.timecleaning = data.TimesCleaned;
      // dlm unit minute
      this.durationcleaning = this.gethour(data.CleanDuration);

      this.cleanername = data.UserName;

      this.cleanerid = data.StaffId;
      this.loading = false;
    },
    gethour(n) {
      var num = n;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " hour(s) and " + rminutes + " minute(s)";

      // const hours = Math.floor(totalMinutes / 60);
      // const minutes = totalMinutes % 60;
      // const seconds = (totalMinutes / 60).toFixed(0);

      // return hours + ":" + minutes.toString().split(".")[0] + ":" + seconds;
    },
    handleEvent(event) {
      console.log(JSON.parse(event.data));
      if (!JSON.parse(event.data).error) {
        let response = JSON.parse(event.data);

        this.role = "cleaner";
        if (response.message == "loading") {
          this.loading = true;
        } else {
          this.parseData(response.message);
        }
      } else {
        this.role = "user";
      }
    },
    listenToSSE() {
      // Create a new EventSource object to connect to the SSE endpoint
      const eventSource = new EventSource("http://127.0.0.1:5000/events");

      // Attach the event listener to handle incoming messages
      eventSource.onmessage = this.handleEvent;
    },
    setTimer() {
      this.interval = setInterval(() => {
        console.log("masukkkllaa");
        this.view = "first";
        this.role = "user";
      }, 10000);
    },
  },
  watch: {
    interval() {
      console.log(this.interval);
    },
    role() {
      console.log(this.role);
      clearInterval(this.interval);

      this.setTimer();
    },
    view() {
      console.log(this.view);
      clearInterval(this.interval);
      this.setTimer();
    },
    interval() {
      console.log(this.interval);
    },
  },

  created() {
    this.listenToSSE();

    // this.detectuser();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
<style>
.card-title {
  text-align: right;
}
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

#myPic {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 0px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>
