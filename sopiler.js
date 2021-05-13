function spoiler() {
    var warning = document.getElementById("warning").value;
    var message = document.getElementById("message").value;
    var separator = document.getElementById("separator").value;
    if(separator == '1'){
        //console.log(3)
        var sep = "\n"
        if (document.getElementById("checkbox").checked) {
            var spoiler_message = warning + ' '+ sep + ' '.repeat(2575) + message;
        } else {
            var spoiler_message = warning + ' ' + sep + '\u200B'.repeat(4000) + message;
        }
        document.getElementById('Afterenter').innerText = "This is your spoil message";
        document.getElementById('Afterenter1').innerText = "Here it is";
        document.getElementById('spoiler').value = spoiler_message;
    }else if(separator == '2'){
        //console.log(3)
        var sep = "\n\n"
        if (document.getElementById("checkbox").checked) {
            var spoiler_message = warning + ' '+ sep + ' '.repeat(2575) + message;
        } else {
            var spoiler_message = warning + ' ' + sep + '\u200B'.repeat(4000) + message;
        }
        document.getElementById('Afterenter').innerText = "This is your spoil message";
        document.getElementById('Afterenter1').innerText = "Here it is";
        document.getElementById('spoiler').value = spoiler_message;
    }else if(separator == '3'){
        //console.log(3)
        var sep = "\n\n\n"
        if (document.getElementById("checkbox").checked) {
            var spoiler_message = warning + ' '+ sep + ' '.repeat(2575) + message;
        } else {
            var spoiler_message = warning + ' ' + sep + '\u200B'.repeat(4000) + message;
        }
        document.getElementById('Afterenter').innerText = "This is your spoil message";
        document.getElementById('Afterenter1').innerText = "Here it is";
        document.getElementById('spoiler').value = spoiler_message;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: '<h5>❗❗ Choose what type of separator you want ❗❗</h5>',
            showConfirmButton: false,
            timer: 2000
        })
    }
}
function clicked() {
    var copytext = document.getElementById("spoiler");
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    document.execCommand('copy');

}
const feedbackC = document.querySelector(".feedback");
const addComment = document.querySelector(".feedback_comment");
const ratings = document.querySelector(".feedback_ratings");
const rating = document.querySelectorAll(".feedback_rating");
const notice = document.querySelector(".feedback_notice");
const noticeContainer = document.querySelector(".feedback-n");

ratings.addEventListener("click", function (e) {
    const clicked = e.target.closest(".feedback_rating");
    //console.log(clicked);
    if (!clicked) return;

    rating.forEach((r) => r.classList.remove("rating_active"));
    clicked.classList.add("rating_active");

    const data = clicked.dataset.rate;
    const rateEmoji = clicked.textContent.split(" ")[0];
    const rateText = clicked.textContent.split(" ")[1];
    //console.log(rateEmoji);
    noticeContainer.innerHTML = "";
    const html = `<section class="feedback_notice">
				<p> ${data < 3 ? `Sorry to heard that ${rateEmoji}! Thank you for the feedback ` : `${rateText}! Thank you ${rateEmoji}`} </p>
                <input style="display:none" class="form-control form-control-sm" name="Feedback" id="warning" type="text" required="required" placeholder=" " value=${rateText} readonly>
			</section>`;
    noticeContainer.insertAdjacentHTML("afterbegin", html);
});
const scriptURL = 'https://script.google.com/macros/s/AKfycby9MyG7H6azEDGwS09-TZPt3D91E3BbVaVXgjDbiKRx4_DvLGg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Feedback Submitted',
            showConfirmButton: false,
            timer: 2000
        }))
        .catch(error => console.error('Error!', error.message))
})
function updateCounter(){
    fetch('https://api.countapi.xyz/update/iconicsudip.github.io/github/?amount=1')
    .then(response => {return response.json()})
    .then((data) => document.getElementsByClassName('count')[0].innerHTML = data.value);
}
updateCounter();
