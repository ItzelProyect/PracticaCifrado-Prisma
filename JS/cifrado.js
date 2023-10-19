var canFila = 0
      var canColumna = 0

      
      function tablaNueva() {
          canFila = parseInt($('#filas').val());
          canColumna = parseInt($('#columnas').val());
          
          var tabla = $('#tablaDinamica');
          var input = $('#input');
  
          tabla.empty().addClass('table table-bordered table-custom');
  
          for (var i = 0; i < canFila; i++) {
              var fila = $('<tr>');
              for (var j = 0; j < canColumna; j++) {
                  fila.append($('<td>').css('width', '30px').css('height', '30px').text(''));
              }
              tabla.append(fila);
          }
  
          // limita la cantidad de caracteres  filas * columnas
          var maxLength = canFila * canColumna;
          input.attr('maxlength', maxLength);
          input.attr('placeholder', 'Máximo ' + maxLength + ' caracteres');
      }

      function cifrarMen() {
        canFila = parseInt($('#filas').val());
        canColumna = parseInt($('#columnas').val());
        var input = $('#input').val();
        var output = '';

        // Verificar si el texto cabe en la tabla
        if (input.length > canFila * canColumna) {
            alert('El texto es demasiado largo para la tabla proporcionada.');
            return;
        }

        // Llenar la tabla y el campo de salida
        for (var i = 0; i < canColumna; i++) {
            for (var j = 0; j < canFila; j++) {
                var index = j * canColumna + i;
                if (index < input.length) {
                    $('#tablaDinamica tr:eq(' + j + ') td:eq(' + i + ')').text(input[index]);
                    output += input[index];
                }
            }
        }

        $('#output').val(output);
    }

    $('#filas, #columnas').on('input', tablaNueva);

    function desMen() {
        var canFila = parseInt($('#filas').val());
        var canColumna = parseInt($('#columnas').val());
        var input = $('#input').val();
        var output = '';

        if (input.length !== canFila * canColumna) {
            alert('La longitud del texto cifrado no coincide con el tamaño de la tabla.');
            return;
        }

        // Leer la tabla y decifrar el texto
        for (var i = 0; i < canFila; i++) {
            for (var j = 0; j < canColumna; j++) {
                var index = j * canFila + i;
                output += $('#tablaDinamica tr:eq(' + i + ') td:eq(' + j + ')').text();
            }
        }

        $('#output').val(output);
    }

    $('#filas, #columnas').on('input', tablaNueva);