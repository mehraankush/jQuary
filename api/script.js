
function fetchImage(){
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var JSONfile=JSON.parse(xhrRequest.response);
        var imgUrl = JSONfile.message;
        $('#image').attr('src',imgUrl);
    };
    //true is dezfult for async and for sync it's value is false
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();

}

$("#fetch-image-button").click(fetchImage);