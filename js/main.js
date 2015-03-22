console.log("hello world");
$.ajax({
    url: "http://api.reimaginebanking.com:80/customers",
    method: "get",
    success: function(response){
        console.log(response);
    },
     
     error: function(response){
        console.log(response);
    }   
});

$('.submit-btn').on("click", function(event){
    $('.input-me').text('Awesome! The information you entered has been saved.');
   console.log($('input.amount').val()); 
});
