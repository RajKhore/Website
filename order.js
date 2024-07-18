function showAddressInstruction() {
    alert("Address format should include: House Number, Suburb, State or Territory, Postcode");
  }
  
  function updateTotal() {
    const size = document.getElementById("size").value;
    let total = size === "1" ? 35 : 55;
    if (document.getElementById("delivery").checked) {
      total += 10;
    }
    document.getElementById("total").innerText = "$" + total;
  }
  
  document.getElementById("card").addEventListener("change", function() {
    if (this.checked) {
      document.getElementById("cardDetails").style.display = "block";
    } else {
      document.getElementById("cardDetails").style.display = "none";
    }
  });
  
  document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Order placed successfully!");
    this.reset();
  });
  