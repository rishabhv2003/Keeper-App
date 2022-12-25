import React from "react";

function footer() {
    var year = new Date().getFullYear();
    return <footer>
        <p>
            Copyright &copy; {year} Rishabh Verma
        </p>
    </footer>
}

export default footer;