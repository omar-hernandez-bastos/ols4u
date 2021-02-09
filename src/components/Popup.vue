<template>
 
    <v-dialog style="box-shadow: none;"
      v-model="dialog"
   max-width="600px"
    >
    <v-card  height=auto class="d-inline-block mx-auto" elevation="0">
    <v-container fluid py-0 ma-0>
      <v-row justify="space-between">
        <v-col cols="12" sm=4 class="d-none d-sm-flex">
          <v-img 
            height="auto"
            width="200"
            src="@/assets/online.jpg"
          ></v-img>
        </v-col>

        <v-col
          cols="12" sm=8
         class="d-none d-sm-flex d-flex justify-center align-center flex-column"
        >
        <div class="display-1 accent--text text-center font-weight-bold titulo work"> {{$t('popup1')}}

</div>
<v-btn class=" my-5 primary" rounded="" @click="gotoPrograms">{{$t('popup2')}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
    </v-dialog>

</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
    created(){
 if(this.$route.name == 'Programs' ||this.$route.name == 'LandingPage'){
this.dialog=false
 }
    },
    methods:{
        async gotoPrograms(){
            await this.$router.push({name:'LandingPage'}) 
            
            this.dialog=false
        }
    }
  }
</script>