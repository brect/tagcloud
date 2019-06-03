
    function gravar(){
        var titulo = document.getElementById("txtTitulo").value;
        var div = document.getElementById("divResultado");
        div.innerHTML = "<p>" + titulo +"</p>";

    }


    // function myFunction() {
    //     var str = document.getElementById("demo").innerHTML;
    //     var res = str.replace(/remover|não|uma/gi, function (x) {
    //         return x.toUpperCase();
    //     });
    //     document.getElementById("demo").innerHTML = res;
    // }