<template>
  <div class="mt-12 pt-3">
    <v-flex xs12 sm12 md12 class="siz-caro">
        <v-carousel cycle interval="2700" height="60vh" hide-delimiters> 
           <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" >
                 <v-row justify="center">
                    <div class="text-capitalized marg font-weight-regular display-2 white--text">{{ item.desc }}</div>
                 </v-row>
           </v-carousel-item>
        </v-carousel>
    </v-flex>
     <h1 class="font-weight-regular mt-2 text-center text-capitalize">dtoolz blog</h1>
    <h3 class="my-3 ml-5 mr-5 font-weight-medium text-capitalize text-center"> Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
             Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque. </h3>
    <v-container fluid>
      <v-row>
           <v-col  sm="6" xs="12">
            <v-img height="40vh" :src="require('../assets/images/m4.jpg')"></v-img>
           </v-col>
           <v-col  sm="6" xs="12" >
              <h3 class="mt-8  font-weight-medium text-capitalize ">
                  Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                  Nulla c. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
               </h3>
               <v-btn router exact :to="'/posts'" color="deep-purple lighten-2" dark>recent blog post
                 <v-icon large>mdi-chevron-right</v-icon>
               </v-btn>
           </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
        <h3 class="text-capitalize text-center mb-1 " >
           <span class="teal--text">coolest</span> 
           <span class="primary--text"> blog</span>
           <span class="success--text">  in </span>
           <span class="warning--text">  the</span>
           <span class="red--text"> world!...</span>
            </h3>
         <v-card>
          <v-container fluid>
            <v-row>
             <v-col
             v-for="(item,i) in items" :key="i" :src="item.src"
              class="d-flex child-flex"
              cols="4"
              >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="item.src"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
    </v-container>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        items: [
            {src : require("../assets/images/m1.jpg"), desc : "updates on latest music"},
            {src : require("../assets/images/m2.jpg"), desc : "exciting news from the world of sports"},
            {src : require("../assets/images/m3.jpg"), desc : "politics and current news around the world"}
        ]
      }
    }
  }
</script>

<style scoped>
  .marg {
      margin-top: 310px;
      background-color: rgb(0, 0, 0, 0.5);
      border-radius: 5px;
      padding-left: 15px;
      padding-right: 15px;
  }
   h1{
     text-decoration: underline;
   }
   .siz-caro {
       max-width: 100% !important; 
   }
   
@media (max-width: 768px) {
  .marg {
      font-size: 25px !important;
  }
}
@media (max-width: 600px) {
  .marg {
      font-size: 25px !important;
  }
}
@media (max-width: 500px) {
  .marg {
      font-size: 20px !important ;
  }
}
@media (max-width: 400px) {
  .marg {
      font-size: 15px !important;
  }
}
@media (max-width: 300px) {
    .marg {
      font-size: 15px !important;
  }
}
</style>
