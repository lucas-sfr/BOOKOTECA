document.addEventListener("DOMContentLoaded", function() {
    const botaoTema = document.getElementById("btn-tema");
    const linkTema = document.getElementById("link-tema");

    const temaSalvo = localStorage.getItem("tema") || "tema-principal";
    linkTema.setAttribute("href", `css/${temaSalvo}.css`);

    botaoTema.textContent = temaSalvo === "tema-principal" ? "Tema Escuro" : "Tema Claro";

    botaoTema.addEventListener("click", () => {
        let novoTema = linkTema.getAttribute("href").includes("tema-escuro")
            ? "tema-principal"
            : "tema-escuro";

        linkTema.setAttribute("href", `css/${novoTema}.css`);
        localStorage.setItem("tema", novoTema);

        botaoTema.textContent = novoTema === "tema-principal" ? "Tema Escuro" : "Tema Claro";
    });
});