<template>
  <!-- first row -->
  <div class="row">
    <div class="col-lg-12">
    <form action="" class="">
      <div class="row">
        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox">
                  <div class="row element ">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/smelly.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Tandas busuk</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2 checkbox-style">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>

        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/bin.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Bin Sanitari Penuh</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/toiletpaper.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Tisu Habis</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>

        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/trashbin.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Tong Sampah Penuh</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/lantaibasah.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Lantai Basah</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>

        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/plunger.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Tandas Tersumbat</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/paipbocor.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Paip Bocor</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>

        <div class="col-lg-6">
          <card type="chart">
            <div class="form-group form-inline">
              <div class="checkbox ">
                  <div class="row element">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2">
                        <img src="@/assets/img/sabunhabis.png" align="right" width="100%" />
                      </div>
                      <div class="col-lg-3">
                        <label class="label"> Sabun Habis</label>
                      </div>
                      <div class="col-lg-2">
                      </div>
                      <div class="col-lg-2">
                        <base-checkbox
                            v-model="model.complete"
                            class="pull-right"
                            name="subscribe"
                          >
                            Telah Disiapkan
                          </base-checkbox>
                        <!-- <label><input type="checkbox" value="h" v-model="form.checkbox"> Complete</label> -->
                      </div>
                      <div class="col-lg-2">
                          <base-checkbox
                            v-model="model.setting"
                            class="pull-right"
                            name="subscribe"
                          >
                          <!-- <img src="@/assets/img/smelly.png" width="100%" /> -->
                            Minta Bantuan 
                          </base-checkbox>
                      </div>
                  </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12" style="text-align: center;">
          <!-- <div class="row"> -->
            <base-button type="success" v-on:click="submit()">Hantar</base-button>
            <!-- <div class="col-lg-1"></div> -->
            <base-button type="warning" v-on:click="cancel()">Batal</base-button>
          <!-- </div> -->
        </div>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import { BaseCheckbox } from 'src/components/index';

export default {
  components: {
    BaseCheckbox
  },
    data: function(){
    return{
    form: {
        checkbox: []
    },
    model: {
        complete: false
      },
    };
  },
}
</script>
<style>
.card{
  text-align: center;
}
.element{
    align-items: center;
    text-align: center;
    padding: 10px;
}
.label{
  color: #05aba2 !important;
}

</style>
