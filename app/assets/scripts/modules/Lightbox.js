import $ from 'jquery';

class Lightbox {
  constructor() {
    // this.sign_up = $(".sign-up");
  }
  navigate(){
    $(".sign-up").click(function(){
      $(".modal").addClass("modal--is--visible");
      $(".modal__login-body").addClass("modal--is--visible");
    });
    $(".modal__login-header__close").click(function(){
      $(".modal").removeClass("modal--is--visible");
      $(".modal__signup-body").removeClass("modal--is--visible");
      $(".modal__login-body").removeClass("modal--is--visible");
    });
    $("#modal-sign-in").click(function() {
      console.log("Hello");
      $(".modal__login-body").addClass("modal--is--visible");
      $(".modal__signup-body").removeClass("modal--is--visible");
    });
    $("#modal-sign-up").click(function() {
      console.log("Hello");
      $(".modal__signup-body").addClass("modal--is--visible");
      $(".modal__login-body").removeClass("modal--is--visible");
    });
  }
}

export default Lightbox;
