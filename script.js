function guntingBatuKertas() {

    let pemain1 = prompt("Pemain 1: pilih gunting, batu, atau kertas");
    let pemain2 = prompt("Pemain 2: pilih gunting, batu, atau kertas");

    if (pemain1 == pemain2) {
        alert("Cieee samaa, jodohhh yaa:)");
    }

    else if (pemain1 == "gunting" && pemain2 == "kertas") {
        alert("Pemain 1 Menang!");
    }

    else if (pemain1 == "batu" && pemain2 == "gunting") {
        alert("Pemain 1 Menang!");
    }

    else if (pemain1 == "kertas" && pemain2 == "batu") {
        alert("Pemain 1 Menang!");
    }

    else {
        alert("Pemain 2 Menang!");
    }
}

function gajahOrangSemut() {

    let pemain1 = prompt("Pemain 1: pilih gajah, orang, atau semut");
    let pemain2 = prompt("Pemain 2: pilih gajah, orang, atau semut");

    if (pemain1 == pemain2) {
        alert("Cieee jodohh!!!");
    }

    else if (pemain1 == "gajah" && pemain2 == "orang") {
        alert("Pemain 1 Menang!");
    }

    else if (pemain1 == "orang" && pemain2 == "semut") {
        alert("Pemain 1 Menang!");
    }

    else if (pemain1 == "semut" && pemain2 == "gajah") {
        alert("Pemain 1 Menang!");
    }

    else {
        alert("Pemain 2 Menang!");
    }
}

function suitJari() {

    let pemain1 = prompt("Pemain 1: pilih ibu jari, telunjuk, atau kelingking");
    let pemain2 = prompt("Pemain 2: pilih ibu jari, telunjuk, atau kelingking");

    if (pemain1 == pemain2) {
        alert("Fikss sungg nikahh");
    }

    else if (pemain1 == "ibu jari" && pemain2 == "telunjuk") {
        alert("Pemain 1 Menang!");
    }

    else if (pemain1 == "telunjuk" && pemain2 == "kelingking") {
        alert("Pemain 1 Menang!");
    }

    else if (pemain1 == "kelingking" && pemain2 == "ibu jari") {
        alert("Pemain 1 Menang!");
    }

    else {
        alert("Pemain 2 Menang!");
    }
}