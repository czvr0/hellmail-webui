$(document).ready(function () {

    let sideantal = 10;

    pagenavigation(sideantal);

    //var inputmails = ["Julefrokost", "Det er snart jul og i den anledning har vi valgt at afholde en julefrokost", "Kent@hellmail.dk", "1"];
    var inputmails = [ ["Julefrokost", "Det er snart jul og i den anledning har vi valgt at afholde en julefrokost", "Kent@hellmail.dk", "1"], ["Så er der kage", "Der er fandme kage i kantinen i dag", "Christian@hellmail.dk", "2"], ["Ny bygning", "Firmaet har opkøbt det lille firma (Microsoft) ved siden af eftersom vi skal bruge mere plads.", "Chefen@hellmail.dk", "3"], ["Nye medarbejdere", "Vi har stor mangel på medarbejdere så der er derfor ansat 100 nye medarbejdere.", "hrchef@hellmail.dk", "4"], ["Ny chef", "Vi har fået ny direktør eftersom jeg siger op. Tak for nogle gode år.", "Tobias@hellmail.dk", "5"] ];

    getmails(inputmails);
    /*
    <li class="page-item"><a class="page-link" href="#!">1</a></li>
    <li class="page-item"><a class="page-link" href="#!">2</a></li>
    <li class="page-item"><a class="page-link" href="#!">3</a></li>
    */

    function createPageItems(sidetal) {

        let li = document.createElement("li");
        li.className = "page-item";

        let a = document.createElement("a");
        a.className = "page-link";
        a.href = "#!";
        a.innerHTML = sidetal;

        /*let card = document.createElement("div");
        card.className = "card newsbox";
*/
        li.appendChild(a);

        return li;
    }

    function pagenavigation(sider) {

        const output = $("#pagenumber");
        output.html("");

        for (let i = 1; i < sider+1; i++) {
            console.log(i);
            output.append(createPageItems(i));
        }
    }

    function createMails(subject, bodytext, from, id) {

        let li = document.createElement("li");
        li.className = "list-group-item";

        let spansub = document.createElement("span");
        spansub.className = "listsubject";
        spansub.innerHTML = subject;

        li.appendChild(spansub);


        let spanfrom = document.createElement("span");
        spanfrom.className = "listfrom";
        spanfrom.innerHTML = from;

        li.appendChild(spanfrom);


        let spanbody = document.createElement("span");
        spanbody.className = "listbody";
        spanbody.innerHTML = bodytext;

        li.appendChild(spanbody);


        let buttontrash = document.createElement("button");
        buttontrash.type = "button";
        buttontrash.style.cssFloat = "right";
        buttontrash.id = "deletemail-" + id;

        let trash = document.createElement("i");
        trash.className = "fas fa-trash";

        buttontrash.appendChild(trash);
        li.appendChild(buttontrash);


        let buttonshow = document.createElement("button");
        buttonshow.className = "showmailpopup";
        buttonshow.type = "button";
        buttonshow.style.cssFloat = "right";
        buttonshow.id = "showmail-" + id;

        let eye = document.createElement("i");
        eye.className = "fas fa-eye";

        buttonshow.appendChild(eye);
        li.appendChild(buttonshow);


        return li;
    }

    function getmails(mails) {

        const outputmail = $("#inmails");
        //outputmail.html("");

        for (let i = 0; i < mails.length; i++) {
            console.log(i);
            outputmail.append(createMails(mails[i][0], mails[i][1], mails[i][2], mails[i][3]));
        }

        $(".showmailpopup").on("click", function () {
            showModalMail(mails, $(this)[0].id.split("-")[1]);
        })
    }
    function showModalMail(mails, mailid) {

        console.log(mailid);

        $("#showmailmodalsubject").val(mails[mailid][0]);
        $("#showmailmodalbody").val(mails[mailid][1]);
        $("#showmailmodalfrom").val(mails[mailid][2]);

        $("#Showmail").modal('show');
    }


});