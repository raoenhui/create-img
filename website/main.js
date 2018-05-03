var imgObj={
    width:300,
    height:300,
    shape:'rect',//or circular
    bgColor:'ff000',

};
$('#cWidth').keyup(function(e){
    imgObj.width=$.trim($('#cWidth').val());
    showImg();
});

$('#cHeight').keyup(function(e){
    imgObj.height=$.trim($('#cHeight').val());
    showImg();
});

function showImg(){
    $('img').attr('src',`//localhost:3000/${imgObj.width}x${imgObj.height}/${imgObj.shape}/${imgObj.bgColor}`)
}
