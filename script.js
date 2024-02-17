document.addEventListener("DOMContentLoaded", function() {
    function addTermToDisplay(term, deff) {

        const parent_container = document.querySelector(".column-container");

    // TERM 
        //  TERM column
        const column_child_term = document.createElement("div");
        column_child_term.classList.add("column");
        parent_container.appendChild(column_child_term);
        //  paragraph for term
        const p_child_term = document.createElement("p");
        p_child_term.textContent = term;
        column_child_term.appendChild(p_child_term);
    // DEFF
        //  DEFF column
        const column_child_deff = document.createElement("div");
        column_child_deff.classList.add("column");
        parent_container.appendChild(column_child_deff);
        //  paragrap for definition
        const p_child_deff = document.createElement("p");
        p_child_deff.textContent = deff;
        column_child_deff.appendChild(p_child_deff);
    }

    function displayTerms() {
        vocabTerms.forEach(entry => {
            addTermToDisplay(entry.term, entry.deff);
        });
    }

    displayTerms();

    document.getElementById("form1").addEventListener("submit", function(event) {
        event.preventDefault();

        let term = document.getElementById("term").value;
        let deff = document.getElementById("deff").value;

        addtoArray(term, deff);
        addTermToDisplay(term, deff);

        document.getElementById("term").value = '';
        document.getElementById("deff").value = '';
    });
});

let vocabTerms = [
    { term: "sample", deff: "sample sample" }
];

function addtoArray(term_x, deff_x) {
    vocabTerms.push({ term: term_x, deff: deff_x });
}
