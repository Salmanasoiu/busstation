function ticket() {
    var from=document.book.from.value;
    var to=document.book.to.value;
    alert(from + "-" + to);
}
function myFun() {
    var name=document.myform.id.value;
    var pass=document.myform.pass.value;

    if (name=="navdeep@gmail.com" && pass=="123") {
        window.alert("Login Successfull");
        getSelection(index.html)
    } else {
        window.alert("Wrong Credential");
    }
}

function myFunction() {
  // Declare variables
  var  input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}