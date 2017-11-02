<template>
  <div>
    <h1>Create An Item</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Valider</button>
        </div>

        <div class="col-md-6">
          <div style="border:1px #eee solid">
            {{item}}
          </div>
        </div><br />

    </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      item: '',
      //items: []
    }
  },
  methods: {
    myFunction(){
      //this.items.push({message: document.querySelector('input').value});
      //this.item = '';
    }

    /*myFunction(){
      this.remoteIpAdress = 'Loading...';
      this.item = '';
      axios.get('https://dns.google.com/resolve?name=' + url)
      .then(function(response){
        vm.remoteIpAdress = response.data.Answer[0].data;
      })
      .catch(function (error) {
        vm.remoteIpAdress = 'error' + error;
      });
    }*/
  }
}
</script>