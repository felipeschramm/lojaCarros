(function () {
    'use strict';

    /*
    Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
    coluna na tabela, com um botão de remover.
    Ao clicar nesse botão, a linha da tabela deve ser removida.
    Faça um pull request no seu repositório, na branch `challenge-31`, e cole
    o link do pull request no `console.log` abaixo.
    Faça um pull request, também com a branch `challenge-31`, mas no repositório
    do curso, para colar o link do pull request do seu repo.
    */

    console.log('Link do pull request do seu projeto: ');

    function app(DOM) {
        return {
            init: function () {
                var ajax = new XMLHttpRequest();
                var $name = document.querySelector('[data-js="company-name"]')
                var $phone = document.querySelector('[data-js="company-phone"]')
                var $info = document.querySelectorAll('[data-js="info-car"]')
                var $button = document.querySelector('button');
                var $table = document.querySelector('[data-js="table"]');

                function getInfo() {
                    ajax.open("GET", "./company.json");
                    ajax.send();
                }

                ajax.addEventListener('readystatechange', function () {

                    if (isRequestOk) {
                        var response = JSON.parse(ajax.responseText);
                        console.log(response)
                        $name.innerHTML = response.name;
                        $phone.innerHTML = response.phone;
                    }
                })

                function isRequestOk() {
                    ajax.readyState === 4 && ajax.status === 200;
                }

                $button.addEventListener('click', postInfo)

                function postInfo() {
                    var tr = document.createElement('tr');

                    $info.forEach(info => {
                        var td = document.createElement('td');
                        td.textContent = info.value;
                        tr.appendChild(td);
                    });
                    tr.appendChild(addButtonRemove())
                    $table.appendChild(tr);
                    cleanFields()
                }

                function cleanFields() {
                    $info.forEach(info => {
                        info.value = ''
                    })
                }

                function addButtonRemove() {
                    var tdButton = document.createElement("td");
                    var buttonRemove = document.createElement('button')
                    buttonRemove.textContent = 'Remover'

                    tdButton.appendChild(buttonRemove)

                    buttonRemove.onclick = function () {
                        var row = tdButton.parentNode;
                        row.parentNode.removeChild(row)
                    }

                    return tdButton;

                }
                getInfo();
            }
        }

    }
    app().init();

})(window.DOM);