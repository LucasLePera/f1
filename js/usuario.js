const swiper = new Swiper(".swiper", {
    // Optional parameters
    speed: 500,
    allowTouchMove: false,
  });
  
  const gotoSlide = (index) => {
    swiper.slideTo(index);
  };
  
  const restart = () => {
    const inputs = document.querySelectorAll("input");
    const buttons = document.querySelectorAll("button[type=button]");
  
    buttons.forEach((button) => {
      button.disabled = true;
    });
  
    inputs.forEach((input) => {
      input.value = "";
    });
  
    gotoSlide(0);
  };
  
  const checkValid = (event) => {
    event.target.nextElementSibling.disabled = !event.target.value.length;
  };
  
  const loginOk = document.getElementById(loginOk)
  loginOk.addEventListener("click", () => {
  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });})
