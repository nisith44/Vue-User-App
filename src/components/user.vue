<template>
  <div class="card" style="width: 18rem;align:center;margin:0 auto;margin-top:20px;"  >
    <img :src="user.avatar"  class="card-img-top rounded-circle" style="height:100%;padding:10px" alt="" />
    <div class="card-body">
      <h2 class="card-title">{{user.first_name+" "+user.last_name}}</h2>
      <p class="card-text">
          <b>{{user.email}}</b><br>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {


    data(){
        return{
            user:{}
        }
    },


  created() {
    console.log(this.$route.params.id);

    
    this.$http.get('https://reqres.in/api/users/'+this.$route.params.id).then(
      (response) => {
        //console.log(response.body.data);
        this.user=response.body.data;
        console.log(this.user);
      }
      
    );
  

  },
};
</script>

<style></style>
