// Funções gerais

function openModal(modal) {

  if (!modal) return;
  modal.style.display = "block";
  modal.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "";
}


//  Abrir modais

document.querySelectorAll('.projeto[id^="case"]').forEach((card) => {

  card.addEventListener('click', () => {
    const caseIndex = card.id.replace('case', '');
    const targetModal = document.getElementById(`caseModal${caseIndex}`);
    openModal(targetModal);
  });

});



// Fechar modais 

document.querySelectorAll('.closeModal').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal-container');
    closeModal(modal);
  });

});


document.addEventListener("DOMContentLoaded", () => {
  // Observer reutilizável
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // classe correspondente ao tipo de elemento
        if (el.classList.contains("projeto")) el.classList.add("projetoAtivo");
        if (el.classList.contains("item")) el.classList.add("itemAtivo");
       if (el.classList.contains("titulo")) el.classList.add("tituloAtivo");
        if (el.classList.contains("Description")) el.classList.add("spanativo");

        // Trava o elemento no estado final e desliga a observação
        observerInstance.unobserve(el);
      }
    });
  }, { 
    threshold: 0.8 
  });

  //  o mesmo observer
  const elementos = document.querySelectorAll(".projeto, .item, h2, .Description");
  elementos.forEach((el) => observer.observe(el));
});

  
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to(".stcTop", {
    scrollTrigger: {
        trigger:".stcTop",
        toggleActions: "play reverse pause pause",
        start: "top 84%", 
        scrub: 1, 
    }, 
  y: -100,
    duration: 2,
    opacity:1
 }) 

  gsap.to(".stc", {
    scrollTrigger: {
        trigger:".stc",
        toggleActions: "play reverse pause pause",
        start: "center 90%", 
        scrub: 1, 
    }, 
  rotate:10,
    duration: 8,
    
 }) 
  gsap.to(".stcDown", {
    scrollTrigger: {
        trigger:".stcDown",
        toggleActions: "play reverse pause pause",
        start: "top 84%", 
        scrub: 1, 
    }, 
  y: 100,
    duration:8,
 })

}
)

