$(() => {
  const deleteBtn = $(".deleteBtn");
  deleteBtn.on("click", (ev) => {
    // let id = ev.target;
    console.log(ev.target);
    // $.post(
    //     '/pgForBoys/admin',{
    //         id
    //     }).done((data)=>{

    //     })
  });
});

// show or hide details
// function toggleDetails() {
//   alert("i nkjdsbvvbks");
//   var details = document.querySelector(".product-details");
//   var button = document.querySelector("button");

//   if (details.style.display === "none") {
//     details.style.display = "block";
//     button.textContent = "Hide Details";
//   } else {
//     details.style.display = "none";
//     button.textContent = "Show More Details";
//   }
// }

// $(document).ready(function () {
//   $("#toggleButton").click(function () {
//     $("#product-details").toggle();
//   });
// });

document.getElementById("toggleButton").addEventListener("onclick", function () {
  var details = document.getElementById("details");
  console.log(hiii);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
});
