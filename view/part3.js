document.addEventListener("DOMContentLoaded", function() {
    const facilitiesContainer = document.getElementById("facilities");
    const totalPriceElement = document.getElementById("totalPrice");
    let totalPrice = 0;
  
    // Function to add a facility
    function addFacility(name, price) {
      const facilityDiv = document.createElement("div");
      facilityDiv.classList.add("facility");
      facilityDiv.innerHTML = `
        <span class="facility-name">${name}: Rs ${price}</span>
        <button class="remove">Remove</button>
      `;
      facilitiesContainer.appendChild(facilityDiv);
      totalPrice += price;
      totalPriceElement.textContent = totalPrice;
  
      // Event listener to remove the facility
      facilityDiv.querySelector(".remove").addEventListener("click", function() {
        facilityDiv.remove();
        totalPrice -= price;
        totalPriceElement.textContent = totalPrice;
      });
    }
  
    // Initial facilities
    addFacility("Swimming Pool", 10);
    addFacility("Gym", 15);
    addFacility("Spa", 20);
  
    // Event listener to add new facility
    document.getElementById("addFacility").addEventListener("click", function() {
      const facilityNameInput = document.getElementById("facilityNameInput");
      const facilityPriceInput = document.getElementById("facilityPriceInput");
      const name = facilityNameInput.value.trim();
      const price = parseFloat(facilityPriceInput.value.trim());
  
      if (name !== "" && !isNaN(price) && price > 0) {
        addFacility(name, price);
        facilityNameInput.value = "";
        facilityPriceInput.value = "";
      } else {
        alert("Please enter valid facility name and price.");
      }
    });
  });