const caseModal1 = document.getElementById('case1');
const caseModal2 = document.getElementById('case2');
const caseModal3 = document.getElementById('case3');
const caseModal4 = document.getElementById('case4');
const caseModal5 = document.getElementById('case5');
const caseModal6 = document.getElementById('case6');
const caseModal7 = document.getElementById('case7');

const closeModal1 = document.getElementById('closeModal1')
const closeModal2 = document.getElementById('closeModal2')
const closeModal3 = document.getElementById('closeModal3')
const closeModal4 = document.getElementById('closeModal4')
const closeModal5 = document.getElementById('closeModal5')
const closeModal6 = document.getElementById('closeModal6')
const closeModal7 = document.getElementById('closeModal7')



//função para abrir o modal do case 1 
caseModal1.addEventListener('click', () => {

    document.getElementById("caseModal1").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal1').scrollTop = 0;
    
    //função para fechar o modal do case 1

    closeModal1.addEventListener('click', () => {
    
        document.getElementById("caseModal1").style.display = "none";
        document.body.style.overflow = "";
    
    });
})



//função para abrir o modal do case 2
caseModal2.addEventListener('click', () => {

    document.getElementById("caseModal2").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal2').scrollTop = 0;
    
    
    //função para fechar o modal do case 2
    closeModal2.addEventListener('click', () => {
    
        document.getElementById("caseModal2").style.display = "none";
        document.body.style.overflow = "";
    
    });
})

//função para abrir o modal do case 3
caseModal3.addEventListener('click', () => {

    document.getElementById("caseModal3").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal3').scrollTop = 0;
    
    
    //função para fechar o modal do case 2
    closeModal3.addEventListener('click', () => {
    
        document.getElementById("caseModal3").style.display = "none";
        document.body.style.overflow = "";
    
    });
})

//função para abrir o modal do case 4
caseModal4.addEventListener('click', () => {

    document.getElementById("caseModal4").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal4').scrollTop = 0;
    
    
    //função para fechar o modal do case 2
    closeModal4.addEventListener('click', () => {
    
        document.getElementById("caseModal4").style.display = "none";
        document.body.style.overflow = "";
    
    });
})

//função para abrir o modal do case 5
caseModal5.addEventListener('click', () => {

    document.getElementById("caseModal5").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal5').scrollTop = 0;
    
    
    //função para fechar o modal do case 2
    closeModal5.addEventListener('click', () => {
    
        document.getElementById("caseModal5").style.display = "none";
        document.body.style.overflow = "";
    
    });
})

//função para abrir o modal do case 6
caseModal6.addEventListener('click', () => {

    document.getElementById("caseModal6").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal6').scrollTop = 0;
    
    
    //função para fechar o modal do case 2
    closeModal6.addEventListener('click', () => {
    
        document.getElementById("caseModal6").style.display = "none";
        document.body.style.overflow = "";
    
    });
})
//função para abrir o modal do case 4
caseModal7.addEventListener('click', () => {

    document.getElementById("caseModal7").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('caseModal7').scrollTop = 0;
    
    
    //função para fechar o modal do case 2
    closeModal7.addEventListener('click', () => {
    
        document.getElementById("caseModal7").style.display = "none";
        document.body.style.overflow = "";
    
    });
})

