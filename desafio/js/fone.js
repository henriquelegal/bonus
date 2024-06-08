function normalize(phone) {
         
    let digitos = phone.replace(/\D/g, '');
    
   
    if (digitos.length !== 12) {
        throw new Error('O número de telefone deve ter exatamente 12 dígitos');
    }
    
 
    let formattedPhone = `(${digitos.slice(0, 3)}) ${digitos.slice(3, 8)}-${digitos.slice(8)}`;
    
    return formattedPhone;
}

function normalizar() {
    const foneInput = document.getElementById('phoneInput').value;
    const output = document.getElementById('output');
    try {
        const formattedPhone = normalize(foneInput);
        output.textContent = `Número normalizado: ${formattedPhone}`;
        output.style.color = 'green';
    } catch (error) {
        output.textContent = error.message;
        output.style.color = 'red';
    }
}
