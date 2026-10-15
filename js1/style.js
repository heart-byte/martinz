function generateFullname() {
    let first = document.getElementById("firstName").value;
    let middle = document.getElementById("middleName").value;
    let last = document.getElementById("lastName").value;

    let fullname = first + " " + middle + " " + last;

    document.getElementById("fullName").innerHTML = fullname;
}

function clearEntries() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";

    document.getElementById("fullName").innerHTML = "";
}