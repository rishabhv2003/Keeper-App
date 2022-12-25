import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
function app() {
    return <div>
        <Header />
        <Note className="note" />
        <Footer />

    </div>
}

export default app;