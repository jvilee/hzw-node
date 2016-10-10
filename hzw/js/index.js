var content = $('#tbody');
$.ajax({
  url:"/api/get_list",
  dataType:"json",
  success:function(res){
    content.html(template('list',{list:res.data}));
  },
  error:function(err){
    console.log(err);
  }
})

