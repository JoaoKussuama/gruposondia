
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counters=document.querySelectorAll('[data-count]');
let counted=false;
const countObserver=new IntersectionObserver((entries)=>{
  if(entries.some(e=>e.isIntersecting)&&!counted){
    counted=true;
    counters.forEach(el=>{
      const target=Number(el.dataset.count); let start=0; const duration=1300; const t0=performance.now();
      const step=now=>{const p=Math.min((now-t0)/duration,1);el.textContent=Math.floor(p*target)+(target>=100?'+':'');if(p<1)requestAnimationFrame(step)};
      requestAnimationFrame(step);
    });
  }
},{threshold:.3});
const stats=document.querySelector('.stats'); if(stats) countObserver.observe(stats);

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card=>{
      card.classList.toggle('hide-project',filter!=='all'&&card.dataset.category!==filter);
    });
  });
});

const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>650));
backTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));

document.getElementById('proposalForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formSuccess').style.display='block';
  e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const id=link.getAttribute('href');
    if(id && id!=='#'){
      const target=document.querySelector(id);
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
    }
  });
});


(root/"index.html").write_text(html, encoding="utf-8")
(root/"style.css").write_text(css, encoding="utf-8")
(root/"script.js").write_text(js, encoding="utf-8")




/* =====================================================
   VÍDEOS / REDES SOCIAIS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const videoModal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeButton = document.getElementById("videoModalClose");
  const playButtons = document.querySelectorAll(".play-button");


  /* ===================================================
     ABRIR VÍDEO
  =================================================== */

  playButtons.forEach(button => {

    button.addEventListener("click", () => {

      const videoURL = button.dataset.video;

      if (!videoURL) {
        return;
      }

      /*
       * Para vídeos incorporáveis, substitui o URL acima
       * pelo URL de embed correspondente.
       */

      videoFrame.src = videoURL;

      videoModal.classList.add("active");

      videoModal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow = "hidden";

    });

  });


  /* ===================================================
     FECHAR MODAL
  =================================================== */

  function closeVideoModal() {

    videoModal.classList.remove("active");

    videoModal.setAttribute(
      "aria-hidden",
      "true"
    );

    /*
     * Limpa o iframe para parar o vídeo.
     */

    videoFrame.src = "";

    document.body.style.overflow = "";

  }


  closeButton.addEventListener(
    "click",
    closeVideoModal
  );


  /* ===================================================
     FECHAR CLICANDO FORA
  =================================================== */

  videoModal.addEventListener(
    "click",
    event => {

      if (event.target === videoModal) {
        closeVideoModal();
      }

    }
  );


  /* ===================================================
     FECHAR COM ESC
  =================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        videoModal.classList.contains("active")
      ) {

        closeVideoModal();

      }

    }
  );


  /* ===================================================
     ANIMAÇÃO DOS CARDS AO FAZER SCROLL
  =================================================== */

  const videoCards =
    document.querySelectorAll(
      ".video-card.reveal"
    );


  const videoObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "active"
            );

          }

        });

      },
      {
        threshold: 0.15
      }
    );


  videoCards.forEach(card => {

    videoObserver.observe(card);

  });

});

/*FACEBOOK */

const videoCards = document.querySelectorAll('.video-card.reveal');

const videoObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.15
});

videoCards.forEach(card => {
    videoObserver.observe(card);
});
