function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var motivo = document.getElementById("motivo").value;
    var comentario = document.getElementById("comentario").value;

    alert("Obrigado por nos contatar! Seus dados foram enviados:\n\n" +
        "Nome: " + nome + "\n" +
        "Email: " + email + "\n" +
        "Telefone: " + telefone + "\n" +
        "Motivo: " + motivo + "\n" +
        "Comentário: " + comentario);
}