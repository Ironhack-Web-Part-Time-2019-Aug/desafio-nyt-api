// document.querySelectorAll('[data-js-card-img]')[0].getAttribute('data-js-card-img')
// "https://static01.nyt.com/images/2019/10/26/world/26uk-bodies/26uk-bodies-thumbStandard.jpg"
window.onload = () => {
  const aTags = document.getElementsByTagName('a');
  const url = window.location.href;
  for (let i = 0; i < aTags.length; i++) {
    if (
      url.split('/')[url.split('/').length - 1] ==
      aTags[i].getAttribute('href').split('/')[1]
    ) {
      console.log('true');
      aTags[i].classList.add('active');
    }
  }

  // aTags.forEach(element => {
  //   if (url.split('/')[url.split('/').length - 1] == element.getAttribute('href').split('/')[1]) {
  //     console.log('true');
  //     e.target.classList.add('active');
  //   }
  // });
};
