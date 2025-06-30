<template>
  <div class="row">
    <!--Compressor-->
    <div class="col-12">
        <div class="row">
            <div class="head">
                <div class="col-lg header">
                    <h3>Compressor  </h3>
                    <h3 v-html="compressor_name"></h3>
                    <h3> | </h3>
                    <h3 v-html="date"></h3>
                    <h3> | </h3>
                    <h3 v-html="time"></h3>
                    <h3> p.m. </h3>
                </div>
            </div>
        </div>
    </div>

    <!-- ACCELEROMETER -->
    <div class="col-lg-3 col-md-6">
      <card type="chart">
        <template slot="header" style="display: inline;">
          <h5 class="card-category">ACCELEROMETER</h5>
          <div class="acc">
          <h3 class="card-title header">
            <p>X  : </p>  
            <p v-html="x"></p>
          </h3>
          <h3 class="card-title header">
            <p>Y  : </p>  
            <p v-html="y"></p>
          </h3>
          <h3 class="card-title header">
            <p>Z  : </p>  
            <p v-html="z"></p>
          </h3>
          </div>
          <div slot="footer"></div>
        </template>
        <template slot="header" style="display: inline;">
          <h5 class="card-category">CURRENT DATA</h5>
          <!-- <div class="acc"> -->
          <h3 class="card-title header">
            <!-- <p>X  : </p>   -->
            <p v-html="currentData"></p>
          </h3>
          <!-- </div> -->
          <div slot="footer"></div>
        </template>
      </card>
    </div>

    <!-- Total Lights -->
    <div class="col-lg-3 col-md-6">
      <card type="chart">
        <template slot="header" >
          <h5 class="card-category">VOLTAGE (V)</h5>
          <h3 class="card-title">
            <p v-html="voltage"></p>
          </h3>
          <div slot="footer"></div>
        </template>
        <template slot="header" >
          <div class="row">
            <div class="col-lg">
              <h5 class="card-category">
                MIN
              </h5>
              <h3 class="card-title">
                <p v-html="voltage"></p>
              </h3>
              <div slot="footer"></div>
            </div>
            <div class="col-lg">
              <h5 class="card-category">
                MAX
              </h5>
              <h3 class="card-title">
                <p v-html="voltage"></p>
              </h3>
              <div slot="footer"></div>
            </div>
          </div>
        </template>
      </card>
    </div>

    <!-- CURRENT -->
    <div class="col-lg-3 col-md-6">
      <card type="chart">
        <template slot="header" >
          <h5 class="card-category">CURRENT (MA)</h5>
          <h3 class="card-title">
            <p v-html="current"></p>
          </h3>
          <div slot="footer"></div>
        </template>
        <template slot="header" >
          <div class="row">
            <div class="col-lg">
              <h5 class="card-category">
                MIN
              </h5>
              <h3 class="card-title">
                <p v-html="current"></p>
              </h3>
              <div slot="footer"></div>
            </div>
            <div class="col-lg">
              <h5 class="card-category">
                MAX
              </h5>
              <h3 class="card-title">
                <p v-html="current"></p>
              </h3>
              <div slot="footer"></div>
            </div>
          </div>
        </template>
      </card>
    </div>

    <!-- ENERGY -->
    <div class="col-lg-3 col-md-6">
      <card type="chart">
        <template slot="header" >
          <h5 class="card-category">ENERGY (KwH)</h5>
          <h3 class="card-title">
            <p v-html="energy"></p>
          </h3>
          <div slot="footer"></div>
        </template>
        <template slot="header" >
          <div class="row">
            <div class="col-lg">
              <h5 class="card-category">
                MIN
              </h5>
              <h3 class="card-title">
                <p v-html="energy"></p>
              </h3>
              <div slot="footer"></div>
            </div>
            <div class="col-lg">
              <h5 class="card-category">
                MAX
              </h5>
              <h3 class="card-title">
                <p v-html="energy"></p>
              </h3>
              <div slot="footer"></div>
            </div>
          </div>
        </template>
      </card>
    </div>

    <!-- Hourly Voltage -->
    <div class="col-lg-4 col-md-6">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Hourly Voltage</h5>
          <h3 class="card-title">
            <div class="chart-area">
              <line-chart
                :chart-data="lineChart1.chartData"
                :gradient-colors="lineChart1.gradientColors"
                :gradient-stops="lineChart1.gradientStops"
                :extra-options="lineChart1.extraOptions"
                :height="200"
              ></line-chart>
            </div>
            <div class="chartButton">
              <!-- <base-button type="success">24 hours</base-button>
              <base-button type="success">7 days</base-button>-->
            </div>
          </h3>
          <div slot="footer"></div>
        </template>
      </card>
    </div>

    <!-- Hourly Current -->
    <div class="col-lg-4 col-md-6">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Hourly Current</h5>
          <h3 class="card-title">
            <div class="chart-area">
              <line-chart
                :chart-data="lineChart2.chartData"
                :gradient-colors="lineChart2.gradientColors"
                :gradient-stops="lineChart2.gradientStops"
                :extra-options="lineChart2.extraOptions"
                :height="200"
              ></line-chart>
            </div>
            <div class="chartButton">
              <!-- <base-button type="success">24 hours</base-button>
              <base-button type="success">7 days</base-button>-->
            </div>
          </h3>
          <div slot="footer"></div>
        </template>
      </card>
    </div>

    <!-- Hourly Energy Usage -->
    <div class="col-lg-4 col-md-6">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Hourly Energy Usage</h5>
          <h3 class="card-title">
            <div class="chart-area">
              <line-chart
                :chart-data="lineChart3.chartData"
                :gradient-colors="lineChart3.gradientColors"
                :gradient-stops="lineChart3.gradientStops"
                :extra-options="lineChart3.extraOptions"
                :height="200"
              ></line-chart>
            </div>
            <div class="chartButton">
              <!-- <base-button type="success">24 hours</base-button>
              <base-button type="success">7 days</base-button>-->
            </div>
          </h3>
          <div slot="footer"></div>
        </template>
      </card>
    </div>
    

  </div>
</template>
<script>
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import TaskList from './TaskList';
import UserTable from './UserTable';
import CountryMapCard from './CountryMapCard';
import StatsCard from 'src/components/Cards/StatsCard';
import config from '@/config';
import { TabPane, Tabs, Collapse, CollapseItem} from 'src/components';
import { Table, TableColumn } from 'element-ui';

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    LineChart,
    StatsCard,
    TaskList,
    CountryMapCard,
    UserTable,
  },
  data() {
    return {
      currentData: 0,
      lineChart1: {
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#05aba2",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      },
      lineChart2: {
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#05aba2",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      },
      lineChart3: {
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#05aba2",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      },
      bigLineChart: {
        allData: [
          [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
          [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
        ],
        activeIndex: 0,
        chartData: null,
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },
      compressor_name: "A",
      date: "21 DECEMBER 2019",
      time: "14:35",
      x: "0",
      y: "0",
      z: "0",
      voltage: 230,
      current: 30,
      energy: 6.9
    };
  },
  computed: {
    bigLineChartCategories() {
      return [{ name: 'Accounts', icon: 'tim-icons icon-single-02' }, { name: 'Purchases', icon: 'tim-icons icon-gift-2' }, { name: 'Sessions', icon: 'tim-icons icon-tap-02' }];
    }
  },
  methods: {
    LightControl(controlType, controlValue, devID) {
      console.log("LightControl", controlType, controlValue, devID)
      var self = this;
      var urlAPI = 'http://localhost:4001/v1/api/control/light/' + devID;
      // for server in cloud
      // var urlAPI = 'http://iot.vectolabs.com:4001/v1/api/control/light/' + devID;

      var param = "";

      if (controlType == "POWER") {
        param = controlValue;
     }
     else if (controlType == "BRIGHTNESS") {
       switch (controlValue) {
         case '10.00':
           param = "AgE=";
           break;
         case '20.00':
           param = "AgI=";
           break;
         case '30.00':
           param = "AgM=";
           break;
         case '40.00':
           param = "AgQ=";
           break;
         case '50.00':
           param = "AgU=";
           break;
         case '60.00':
           param = "AgY=";
           break;
         case '70.00':
           param = "Agc=";
           break;
         case '80.00':
           param = "Agg=";
           break;
         case '90.00':
           param = "Agk=";
           break;
         case '100.00':
           param = "Ago=";
           break;
         default:
             console.log("LightControl Unknown ControlValue:", controlValue);
       }
     }

      let data = {
        deviceQueueItem: {
          confirmed: false,
          fPort: 3,
          devEUI: devID,
          data: param
        }
      };     
      // call API on debug service to control the light
      fetch(
        urlAPI,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          mode: "no-cors",
          body: JSON.stringify(data) //hantar data je weeh !!!! lk
        }
      )
        .then(response => {
          // eslint-disable-next-line no-console
    //      return response.json();
        })
        .then(data => {
          console.log(data)
          // console.log(data["message"].voltage);
          //  let parsedobj = JSON.parse(JSON.stringify())
          // JSON.parse(JSON.stringify(obj))
          // this.payload = parsedobj
          // console.log()
          // console.log(JSON.stringify(self.payload))
        });
    },
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ]
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
    initLine(data) {
      console.log(data["message"].voltage);
      let avr = 0;
      let arr1 = [];
      let arr2 = [];
      for (let i = 0; i < data["message"].voltage.length; i++) {
        console.log(data["message"].voltage[i].timestamp);
        arr1.push(
          new Date(data["message"].voltage[i].timestamp).toLocaleTimeString()
        ); //toLocaleTimeString javascript method //x-axis
        arr2.push(data["message"].voltage[i].value); //y-axis
        avr += data["message"].voltage[i].value;
      }

      let ttl = avr / data["message"].voltage.length;
      console.log(arr1);
      console.log(arr2);

      let chartData = {
        datasets: [
          {
            label: "Voltage Time",
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            s: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#05aba2",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: arr2
          }
        ],

        labels: arr1
      };

      this.lastVoltage = ttl.toFixed(2);
      this.lineChart1.chartData = chartData;
    },
    initLine2(data) {
      console.log(data["message"].current);
      let avr = 0;
      let arr1 = [];
      let arr2 = [];
      for (let i = 0; i < data["message"].current.length; i++) {
        console.log(data["message"].current[i].timestamp);
        arr1.push(
          new Date(data["message"].current[i].timestamp).toLocaleTimeString()
        ); //toLocaleTimeString javascript method //x-axis
        arr2.push(data["message"].current[i].value); //y-axis
        avr += data["message"].current[i].value;
      }

      console.log(arr1);
      console.log(arr2);

      let ttl = avr / data["message"].current.length;

      let chartData = {
        datasets: [
          {
            label: "Hourly Current",
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#05aba2",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: arr2
          }
        ],

        labels: arr1
      };

      this.lastCurrent = ttl.toFixed(2);
      this.lineChart2.chartData = chartData;
    },
    initLine3(data) {
      console.log(data["message"].energy);
      let arr1 = [];
      let arr2 = [];
      let avr = 0;
      for (let i = 0; i < data["message"].energy.length; i++) {
        console.log(data["message"].energy[i].timestamp);
        arr1.push(
          new Date(data["message"].energy[i].timestamp).toLocaleTimeString()
        ); //toLocaleTimeString javascript method //x-axis
        arr2.push(data["message"].energy[i].value); //y-axis
        avr += data["message"].energy[i].value;
      }

      let ttl = avr / data["message"].energy.length;

      console.log(arr1);
      console.log(arr2);

      let chartData = {
        datasets: [
          {
            label: "Hourly energy",
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#05aba2",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: arr2
          }
        ],

        labels: arr1
      };

      this.totalEnergy = ttl.toFixed(2);
      this.lineChart3.chartData = chartData;
    },
    callData2: async function() {
      var self = this;
      let data = {
        type: "lights",
        params: ["current", "energy", "voltage", "status", "power", "dimm"]
      };

      // "http://35.198.219.94/get"
      fetch(
        "https://alpha.vectolabs.com:8001/api/v1/telemetry/device/lights/110203040506070c",
        {
          method: "POST",
          body: JSON.stringify(data) //hantar data je weeh !!!! lk
        }
      )
        .then(response => {
          // eslint-disable-next-line no-console
          return response.json();
        })
        .then(data => {
          // console.log(data["message"].voltage);

          this.initLine(data);
          this.initLine2(data);
          this.initLine3(data);

          //  let parsedobj = JSON.parse(JSON.stringify())
          // JSON.parse(JSON.stringify(obj))
          // this.payload = parsedobj
          // console.log()
          // console.log(JSON.stringify(self.payload))
        });
    },
    testData: function() {
      console.log("HEHE : " + JSON.stringify(self.payload));
    }
  },
  mounted(){
      this.initBigChart(0);
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
  },
  created(){
      // this.callData();
    this.callData2();
  }
};
</script>
<style>
.header h3{
  display: inline;
}
.header p{
    display: inline;
}
.inlinethings p{
  display: inline;
}
.acc h3{
  /* right: 0px; */
  display: inline;
  /* padding-left: 80px; */
}
</style>
