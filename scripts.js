(function(win, doc){
    'use strict';
    let $signInBtn = doc.querySelector('.signInBtn');
    let $signUpBtn = doc.querySelector('.signUpBtn');
    let $container = doc.querySelector('.container');
    let $CPFField = doc.querySelector('input[name="CPF"]');

    function initialize(){
        $signInBtn.addEventListener('click', toggleForm, false);
        $signUpBtn.addEventListener('click', toggleForm, false);    
        $CPFField.addEventListener('keypress', formatCPF, false);
    }
    
    function toggleForm(){
        $container.classList.toggle('active');
    }

    function formatCPF(){
        $CPFField.value = CPFMask($CPFField.value);
    }

    function CPFMask(cpf){
        cpf=cpf.replace(/\D/g, "");
        cpf=cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf=cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf
    }

    initialize();
})(window, document);