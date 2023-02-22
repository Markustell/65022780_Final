let txtOut = () => {
    let name = document.forms["FORM"]["name"].value;
    let sname = document.forms["FORM"]["surname"].value;
    let gdr = document.getElementById("gender").value;
    let cld = document.getElementById("birth").value;

    if(name == null || name == "", sname == null || sname == "", !cld) {
        alert("ข้อมูลไม่ครบ");
    }else {
        let table = document.querySelector("table");
        let tr = document.createElement("tr");
        let tdname = tr.appendChild(document.createElement("td"));
        let tdsname = tr.appendChild(document.createElement("td"));
        let tdgdr = tr.appendChild(document.createElement("td"));
        let tdcld = tr.appendChild(document.createElement("td"));
        tdname.innerHTML = name;
        tdsname.innerHTML = sname;
        tdgdr.innerHTML = gdr;
        tdcld.innerHTML = cld;
        table.appendChild(tr);
    }
}