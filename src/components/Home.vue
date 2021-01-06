<template>
  <div class="container">
      <br>
    <div class="row">
      <div class="col-md-9">

        <div v-for="user in users" :key="user.id" class="card mb-3" style="max-width: 840px;">
          <div class="row g-0">
            <div class="col-md-3">
              <img class="rounded-circle" style="height:100%;padding:10px" :src="user.avatar"  alt="" />
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h5 class="card-title">{{user.first_name+" "+user.last_name}}</h5>
                <p class="card-text">
                  Email: {{user.email}} <br>
                  <small class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</small>
                  <br>
                <router-link :to="'/user/'+user.id" class="btn-sm btn btn-primary">View User</router-link>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            users:[]
        }
    },

    created() {
    this.$http.get('https://reqres.in/api/users?page=1').then(
      (response) => {
        //console.log(response.body.data);
        this.users=response.body.data;
        console.log(this.users);
      }
      
    );
  },

};
</script>

<style></style>
