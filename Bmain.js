window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'flex';
  }, 2000);
});

const medBtn = document.getElementById('medBtn');
const medSub = document.getElementById('medSub');
const backBtn = document.getElementById('backBtn');

medBtn.addEventListener('click', () => {
  medSub.style.display = 'flex';
});

backBtn.addEventListener('click', () => {
  medSub.style.display = 'none';
});



const venteBtn = document.getElementById('venteBtn');
const venteSub = document.getElementById('venteSub');
const venteBackBtn = document.getElementById('venteBackBtn');

venteBtn.addEventListener('click', () => {
  venteSub.style.display = 'flex';
});

venteBackBtn.addEventListener('click', () => {
  venteSub.style.display = 'none';
});


const statBtn = document.getElementById('statBtn');
const statSub = document.getElementById('statSub');
const statbackBtn = document.getElementById('statbackBtn');

statBtn.addEventListener('click', () => {
  statSub.style.display = 'flex'
});

statbackBtn.addEventListener('click', () => {
  statSub.style.display = 'none'
});



// stock commande


const comBtn = document.getElementById('comBtn');
const comSub= document.getElementById('comSub');
const comBackBtn = document.getElementById('comBackBtn');

comBtn.addEventListener('click', () => {
  comSub.style.display = 'flex'
});

comBackBtn.addEventListener('click', () => {
  comSub.style.display = 'none'
});


// const comBtn = document.getElementById('comBtn');
// const comSub = document.getElementById('comSub');
// const comBackBtn = document.getElementById('comBackBtn');

// comBtn.addEventListener('click', () => {
//   comSub.style.display = 'flex'
// });

// comBackBtn.addEventListener('click', () => {
//   comSub.style.display = 'none'
// });







