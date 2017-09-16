window.onload = function() {
  var picked = Math.floor((Math.random() * 10) + 1);
  var btn = document.getElementById('btn_ans');
  var ans = document.getElementById('input_ans');
  var pic = document.getElementById('pic');
  var txt = document.getElementById('txt');

  btn.addEventListener("click",function() {
    if ( Number(ans.value) == picked ){
      pic.src = "img/rageface_success.png";
    }else{
      pic.src = "img/rageface_fail.png";
    }
    txt.innerHTML = "ans: " + picked;
    setTimeout(function() {
      pic.src = "img/rageface_info.png";
      txt.innerHTML = "Guess what number do i think ?";
      ans.value = null;
    },300);
  });
}
