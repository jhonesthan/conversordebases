
    function convert_decimal() {
        var decimal = parseInt(
            document.getElementById('ipt_decimal').value, 10)
            document.getElementById('ipt_binario').value = decimal.toString(2);
            document.getElementById('ipt_octal').value = decimal.toString(8);
            document.getElementById('ipt_hexadecimal').value = decimal.toString(16);
    }

    function convert_binario() {
        var binario = parseInt(
            documet.getElementById('ipt_binario').value, 10)
            document.getElementById('ipt_decimal').value = parseInt(binario, 2) ;
            document.getElementById('ipt_octal').value = parseInt(binario, 2).toString(8);
            document.getElementById('ipt_hexadecimal').value = decimal.toString(16);
    }

    function convert_octal() {
        var octal = parseInt(
            document.getElementById('ipt_octal').value, 10)
            document.getElementById('ipt_decimal').value = parseInt(octal, 8);
            document.getElementById('ipt_binario').value = parseInt(octal, 8).toString(2);
            document.getElementById('ipt_hexadecimal').value = parseInt(octal, 8).toString(16);
    }

    function convert_hexadecimal() {
        var hexadecimal = 
            document.getElementById('ipt_hexadecimal').value
            document.getElementById('ipt_decimal').value = parseInt(hexadecimal, 16);
            document.getElementById('ipt_binario').value = parseInt(hexadecimal, 16).toString(2);
            document.getElementById('ipt_octal').value = parseInt(hexadecimal, 16).toString(8);
    }

    // condições para habilitar os inputs de inserção

    function habi_desabi(value) {
        // se a seleção for igual a decimal, então habilite o input, se não, desabilite.
        if(value == 10) {
            ipt_decimal.disabled = false;
        } else if(value != 10) {
            ipt_decimal.disabled = true;
        }

          // se a seleção for igual a binario, então habilite o input, se não, desabilite.
          if(value == 2) {
            ipt_binario.disabled = false;
        } else if(value != 2) {
            ipt_binario.disabled = true;
        }

          // se a seleção for igual a octal, então habilite o input, se não, desabilite.
          if(value == 8) {
            ipt_octal.disabled = false;
        } else if(value != 8) {
            ipt_octal.disabled = true;
        }

        // se a seleção for igual a hexadecimal, então habilite o input, se não, desabilite.
        if(value == 16) {
            ipt_hexadecimal.disabled = false;
        } else if(value != 16) {
            ipt_hexadecimal.disabled = true;
        }


    }

    // Condições para chamar a função de calcular de acordo com o select.

    function chamar_calculo() {
        // se a seleção for igual a decimal
        if(tipos_bases.value == 10) {
            convert_decimal();
        }

        // se for binário
        if(tipos_bases.value == 2) {
            convert_binario();
        }

        // se for octal
        if(tipos_bases.value == 8) {
            convert_octal();
        }

        // se for hexadecimal
        if(tipos_bases.value == 16) {
            convert_hexadecimal();
        }
    };


    // Função para o tipo de dado ser apenas 0 e 1 (Binário)

    function type_binario(e) {
        var tecla=(window.event)?event.keyCode:e.which;
        if((tecla == 48||tecla == 49)) return true;
        else {
            return false;
        }
    }