<template>
  
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-sm-12" >
          <h5>Untuk kegunaan pejabat sahaja</h5>
          <a>
            <button class="btn btn-default">
            <img src="@/assets/img/maintenance2.png" class="img-circle" alt="Responsive image" width="50px">
            </button>
            <!-- <b-img src="@/assets/img/maintenance.png" fluid alt="Responsive image"></b-img> -->
          </a>
          <a>
            <button class="btn btn-default">
            <img src="@/assets/img/cleaner2.png" class="img-circle" alt="Responsive image" width="50px">
            </button>
            <!-- <b-img src="@/assets/img/cleaner.png" fluid alt="Responsive image"></b-img> -->
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12" >
          <div class="head">
            <h1>Tandas OK?</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <div id="main">
                <div></div>
                <div class="happy" id="mysmileface" >
                <!-- happy -->
                  <button class="btn btn-link">
                    <img src="@/assets/img/smile.png" class="img-circle" alt="Responsive image">
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            <div class="col-lg-6">
              <form class="circle-container">
                <div class="row">
                <!-- <div id="main">
                <div></div>
                <div class="sad" id="mysmileface" >
                  <button class="btn btn-link">
                    <img src="@/assets/img/sad.png" class="img-circle" alt="Responsive image">
                  </button>
                </div>
                <div></div>
                </div> -->
                <div class="container">
                <a class="deg0">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/smelly.png" width="60px" /><input type="checkbox"> Busuk</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg45">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/bin.png" width="50px" /><input type="checkbox"> Bin Sanitari Penuh</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg90">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/toiletpaper.png" width="50px" /><input type="checkbox"> Tisu Habis</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg135">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/trashbin.png" width="90px" /><input type="checkbox"> Tong Sampah Penuh</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg180">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/lantaibasah.png" width="60px" /><input type="checkbox"> Lantai Basah / Kotor</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg225">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/plunger.png" width="60px" /><input type="checkbox"> Tandas Tersumbat</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg270">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/paipbocor.png" width="50" /><input type="checkbox"> Paip Bocor</label>
                  </div>
                </div>
                </a>
                </div>
                <div class="container">
                <a class="deg315">
                <div class="form-group">
                  <div class="checkbox">
                    <label><img src="@/assets/img/sabunhabis.png" width="60px" /><input type="checkbox"> Sabun Habis</label>
                  </div>
                </div>
                </a>
                </div>
                </div>
              </form>
              <!-- sad -->
              <!-- <ul>
              <form class="form-inline">
                <div class="form-group">
                  <div class="checkbox">
                    <div class="circle-container">
                      <a class="center">
                          
                            <img class="center" src="@/assets/img/sad.png" />
                          
                      
                      <li>
                        <div class="form-inline">
                          <button class="btn btn-default"  v-on:click="submit()">submit</button>
                          
                        </div>
                        <div class="form-inline">
                          <button class="btn btn-default" v-on:click="clear()">reset</button>
                          
                        </div>
                      </li>
                      </a>
                      <a class="deg0">
                        <li>
                          <img src="@/assets/img/bin.png" width="50px" />
                          <div class="checkbox" value="a">
                            <h5>Sanitari Bin Penuh</h5>
                          </div>Sanitari Bin Penuh
                        </li>
                      </a>
                      <a class="deg45">
                        <li>
                          <img src="@/assets/img/toiletpaper.png" width="50px" />
                          <div class="checkbox" value="b" label>
                            <h5>Tisu Habis</h5>
                          </div>Tisu Habis
                        </li>
                      </a>
                      <a class="deg90">
                        <li>
                          <img src="@/assets/img/trashbin.png" width="90px" />
                          <div class="checkbox" value="c" label>
                            <h5>Tong Sampah Penuh</h5>
                          </div>Sampah Penuh
                        </li>
                      </a>
                      <a class="deg135">
                        <li>
                          <img src="@/assets/img/lantaibasah.png" width="60px" />
                          <div class="checkbox" value="d" label>
                            <h5>Lantai Basah / Kotor</h5>
                          </div>Lantai Basah
                        </li>
                      </a>
                      <a class="deg180">
                        <li>
                          <img src="@/assets/img/plunger.png" width="60px" />
                          <div class="checkbox" value="e" label>
                            <h5>Tandas Tersumbat</h5>
                          </div>Tandas Sumbat
                        </li>
                      </a>
                      <a class="deg225">
                        <li>
                          <img src="@/assets/img/paipbocor.png" width="50" />
                          <div class="checkbox" value="f" label>
                            <h5>Paip Bocor</h5>
                          </div>Paip Bocor
                        </li>
                      </a>
                      <a class="deg270">
                        <li>
                          <img src="@/assets/img/sabunhabis.png" width="60px" />
                          <div class="checkbox" value="g" label>
                            <h5>Sabun Habis</h5>
                          </div>Sabun Habis
                        </li>
                      </a>
                      <a class="deg315">
                        <li>
                          <img src="@/assets/img/smelly.png" width="60px" />
                          <div class="checkbox" value="h" label>
                            <h5>Busuk</h5>
                          </div>Busuk
                        </li>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              </ul> -->
              <!-- <button class="btn btn-link">
                <img src="@/assets/img/sad.png" class="img-circle" alt="Responsive image">
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- <div class="col-lg-6">
      <div class="row">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-12" :class="isRTL ? 'text-right' : 'text-left'">
              
              
            </div>
          </div>
        </template>
      </card>
      </div>
      <div class="row">
        <card type="chart">
        <template slot="header">

          
        </template>
        </card>
      </div>
    </div> -->

    <!-- <div class="col-lg-6">
      <card type="chart">
        <template slot="header">
          
          <div class="row">
            <div class="col-sm-12" :class="isRTL ? 'text-right' : 'text-left'">
              
            </div>
            <div class="col-sm-6 d-flex d-sm-block">
              
            </div>
          </div>
            
        </template>
      </card>
      
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'sidebar',
  props: {    
    maintenance: {
      type: String,
      default: 'src/assets/img/maintenance.png',
      description: 'Maintenance'
    },
    cleaner: {
      type: String,
      default: 'src/assets/img/cleaner.png',
      description: 'Cleaner'
    },
  }
}
</script>

<style scoped>
  .head {
  text-align: center;
  /* margin-top: -110px;
  min-height: 110px; */
}
.circle-container {
  list-style: none;
  position: relative;
  width: 50em;
  height: 50em;
  padding: 2.8em;
  /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
  /* border: dashed 1px; */
  border-radius: 50%;
  margin: 1.75em auto 0;
  /* background-color: white; */
}
.circle-container a {
  display: block;
  position: absolute;
  top: 43%;
  left: 50%;
  width: 6em;
  height: 3em;
  margin: -4em;
}
.circle-container img {
  display: block;
}
.deg0 {
  transform: translate(18em);
} /* 12em = half the width of the wrapper */
.deg45 {
  transform: rotate(45deg) translate(18em) rotate(-45deg);
}
.deg90 {
  transform: rotate(90deg) translate(18em) rotate(-90deg);
}
.deg135 {
  transform: rotate(135deg) translate(18em) rotate(-135deg);
}
.deg180 {
  transform: rotate(180deg) translate(18em) rotate(-180deg);
}
.deg225 {
  transform: rotate(225deg) translate(18em) rotate(-225deg);
}
.deg270 {
  transform: rotate(270deg) translate(18em) rotate(-270deg);
}
.deg315 {
  transform: rotate(315deg) translate(18em) rotate(-315deg);
}
.center {
  opacity: 0.6;
}
#main{
  width: 100%;
  height: 600px;
  /* border: 1px solid black; */
  display: -webkit-flex; /* Safari */
  -webkit-align-items: flex-start; /* Safari 7.0+ */
  display: flex;
  align-items: flex-start;
}
#main div {
  -webkit-flex: 1; /* Safari 6.1+ */
  flex: 1;
}

#mysmileface{
  -webkit-align-self: center; /* Safari 7.0+ */
  align-self: center;
}
</style>