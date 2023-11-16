function adicionarPessoa() {
    var nome = prompt("Nome:");
    var peso = prompt("Peso:");
    var altura = prompt("Altura:");

    var imc = peso / (altura * altura);
    

    var classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso normal";
    } else if (imc > 18.5 && imc < 25){
        classificacao = "Peso normal";
    } else if (imc >= 25 && im < 30) {        
        classificacao = "Excesso de peso";    
    } else if (imc >= 30 && im < 40) {    
        classificacao = "Obesidade Classe I";   
    } else if (imc >= 40) {    
        classificacao = "Obesidade Classe III";
    }


    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = nome;
    cell2.innerHTML = imc;
    cell3.innerHTML = classificacao;
    
  }