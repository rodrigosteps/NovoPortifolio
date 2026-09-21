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
        if (el.classList.contains("processoCase")) el.classList.add("processoCaseAtivo");
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
  const elementos = document.querySelectorAll(".projeto, .processoCase, .item, h2, .Description");
  elementos.forEach((el) => observer.observe(el));
});

  
 gsap.registerPlugin(ScrollTrigger);

  gsap.to(".stcTop", {
  scrollTrigger: {
    trigger: ".stcTop",
    start: "top 80%",
    end: "top 30%", 
    scrub: 1,
  },
  y: -100,
  opacity: 1
});

gsap.to(".stc", {
  scrollTrigger: {
    trigger: ".stc",
    start: "center 90%",
    end: "center 40%",
    scrub: 1,
  },
  rotate: 10,
}); 

gsap.to(".stcDown", {
  scrollTrigger: {
    trigger: ".stcDown",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
  y: 100,
  x:-20,
});


// função para abrir/fechar NAV
const menu = document.getElementById('menu');
const btnOpenMenu = document.getElementById('openMenu');

const btnCloseMenu = document.getElementById('xIcon').closest('button');

const navLinks = document.querySelectorAll('.links a');

btnOpenMenu.addEventListener('click', () => {
  menu.classList.add('menuActive');
  document.body.style.overflow = 'hidden'; 
});

btnCloseMenu.addEventListener('click', () => {
  menu.classList.remove('menuActive');
  document.body.style.overflow = ''; 
});

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {

    event.preventDefault();

    
    menu.classList.remove('menuActive');
    document.body.style.overflow = '';

    
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100); 
    }
  });
});



// função para o descatar o NAV

const Links = document.querySelectorAll('.links a');

const sections = Array.from(navLinks).map(link => {
  const id = link.getAttribute('href');
  return document.querySelector(id);
})

const options = {
  root: null,
  rootMargin: '-20% 0px -60% 0px', 
  threshold: 0 
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute('id');
      

      Links.forEach(link => {
        link.classList.remove('ativo');
      });
      

      const activeLink = document.querySelector(`.links a[href="#${currentId}"]`);
      if (activeLink) {
        activeLink.classList.add('ativo');
      }
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});