<template>
  <div>
    <h1>Create An Item</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Name:</label>
            <!--input id="url" type="text" class="form-control" v-model="item.name"-->
            <input id="url" type="text" class="form-control">
          </div>
        </div>
        </div>
        <div class="form-group">
          <button id="valider" class="btn btn-primary">Valider</button>
        </div>

        <div style="border:1px #eee solid" class="col-md-6">
            {{item}}
            {{remoteIpAdress}}
        </div>

    </form>
  </div>
</template>

<script>
//import $ from 'jquery';
$('#valider').on('click', function(){
  alert('myUrl')
  //var myUrl = $('#url').val();
})
export default {
  data(){
    return{
      item: '',
      remoteIpAdress: '',
      //items: []
    }
  },
  created: function()
  {
    this.fetchItems();
  },
  methods: {
    fetchItems()
    {      
      let uri = 'https://dns.google.com/resolve?name=s-19.com';
      let uri2 = 'https://dns.google.com/resolve?name=s-19.com&type=CNAME';
      
      this.axios.get(uri2).then((response) => {
        this.item = response.data.Authority[0].data;
      });      
      this.axios.get(uri).then((response) => {
        this.remoteIpAdress = response.data.Answer[0].data;
      });


    }
  }
}
</script>