function loadtable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8000/getNews", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + object['NewsId'] + '</td>';
                trHTML += '<td>' + object['NameNews'] + '</td>';
                trHTML += '<td>' + object['UpdatedDate'] + '</td>';
                trHTML += '<td></td>';
                trHTML += '</tr>';
            }
            document.getElementById("ID1").innerHTML = trHTML;
        }
    };
    xhttp.send();
}

loadtable();
