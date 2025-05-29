// import { icons } from '../utils/icons.js';
// import { authFetch } from '../services/auth.js';
// import { showToast, validateInput } from '../utils/ui.js';

// export async function renderSupportRequestPage() {
//   const mainContainer = document.getElementById('main-container');
  
//   mainContainer.innerHTML = `
//     <div class="container py-5 mt-5">
//       <div class="row justify-content-center">
//         <div class="col-lg-8">
//           <div class="card shadow">
//             <div class="card-body p-4">
//               <h1 class="h3 mb-4">Submit Support Request</h1>
              
//               <form id="supportRequestForm" onsubmit="handleSupportRequest(event)">
//                 <div class="mb-3">
//                   <label for="deviceType" class="form-label">Device Type</label>
//                   <select class="form-select" id="deviceType" required>
//                     <option value="">Select device type</option>
//                     <option value="laptop">Laptop</option>
//                     <option value="desktop">Desktop</option>
//                     <option value="printer">Printer</option>
//                     <option value="network">Network Equipment</option>
//                     <option value="mobile">Mobile Device</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="issueSummary" class="form-label">Issue Summary</label>
//                   <input type="text" class="form-control" id="issueSummary" required
//                     placeholder="Brief description of the issue">
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="description" class="form-label">Detailed Description</label>
//                   <textarea class="form-control" id="description" rows="4" required
//                     placeholder="Please provide detailed information about the issue"></textarea>
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="location" class="form-label">Location</label>
//                   <input type="text" class="form-control" id="location" required
//                     placeholder="Where is the device located?">
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="priority" class="form-label">Priority Level</label>
//                   <select class="form-select" id="priority" required>
//                     <option value="">Select priority</option>
//                     <option value="low">Low - Not urgent</option>
//                     <option value="medium">Medium - Affects work but has workaround</option>
//                     <option value="high">High - Critical issue, no workaround</option>
//                   </select>
//                 </div>
                
//                 <div class="mb-4">
//                   <label for="scheduleDate" class="form-label">Preferred Service Date</label>
//                   <input type="datetime-local" class="form-control" id="scheduleDate" required>
//                 </div>
                
//                 <button type="submit" class="btn btn-primary w-100 py-2">
//                   Submit Request
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
  
//   // Update document title
//   document.title = 'Submit Support Request - Dern-Support';
  
//   // Add form submission handler
//   window.handleSupportRequest = async (e) => {
//     e.preventDefault();
    
//     const formData = {
//       deviceType: document.getElementById('deviceType').value,
//       issueSummary: document.getElementById('issueSummary').value,
//       description: document.getElementById('description').value,
//       location: document.getElementById('location').value,
//       priority: document.getElementById('priority').value,
//       scheduleDate: document.getElementById('scheduleDate').value,
//     };
    
//     try {
//       const response = await authFetch(`${window.API_URL}/requests`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to submit support request');
//       }
      
//       showToast('Success', 'Support request submitted successfully!', 'success');
//       window.navigateTo('/dashboard');
//     } catch (error) {
//       showToast('Error', error.message, 'error');
//     }
//   };
// }




// import { icons } from "../utils/icons.js";
// import { authFetch } from "../services/auth.js";
// import { showToast, formatCurrency } from "../utils/ui.js";

// export async function renderSupportRequestPage() {
//   const mainContainer = document.getElementById("main-container");
//   const userRole = localStorage.getItem("userRole");

//   // Fetch available spare parts first
//   let spareParts = [];
//   try {
//     const response = await authFetch(`${window.API_URL}/spareparts`);
//     spareParts = await response.json();
//   } catch (error) {
//     console.error("Error fetching spare parts:", error);
//     showToast("Error", "Failed to load spare parts", "error");
//   }

//   mainContainer.innerHTML = `
//     <div class="container py-5 mt-5">
//       <div class="row justify-content-center">
//         <div class="col-lg-8">
//           <div class="card shadow">
//             <div class="card-body p-4">
//               <h1 class="h3 mb-4">Submit Support Request</h1>
              
//               <form id="supportRequestForm" onsubmit="handleSupportRequest(event)">
//                 <div class="mb-3">
//                   <label for="deviceType" class="form-label">Device Type</label>
//                   <select class="form-select" id="deviceType" required>
//                     <option value="">Select device type</option>
//                     <option value="laptop">Laptop</option>
//                     <option value="desktop">Desktop</option>
//                     <option value="printer">Printer</option>
//                     <option value="network">Network Equipment</option>
//                     <option value="mobile">Mobile Device</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="issueSummary" class="form-label">Issue Summary</label>
//                   <input type="text" class="form-control" id="issueSummary" required
//                     placeholder="Brief description of the issue">
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="description" class="form-label">Detailed Description</label>
//                   <textarea class="form-control" id="description" rows="4" required
//                     placeholder="Please provide detailed information about the issue"></textarea>
//                 </div>
                
//                 <div class="mb-3">
//                   <label for="location" class="form-label">Location</label>
//                   <input type="text" class="form-control" id="location" required
//                     placeholder="Where is the device located?">
//                 </div>

//                 ${
//                   userRole === "business"
//                     ? `
//                   <div class="mb-3">
//                     <div class="form-check">
//                       <input class="form-check-input" type="checkbox" id="requiresOnSite">
//                       <label class="form-check-label" for="requiresOnSite">
//                         Request On-Site Support
//                       </label>
//                     </div>
//                     <div class="form-text">Our technician will visit your location for support</div>
//                   </div>
//                 `
//                     : ""
//                 }
                
//                 <div class="mb-3">
//                   <label class="form-label">Spare Parts Needed</label>
//                   <div id="sparePartsContainer">
//                     ${spareParts
//                       .map(
//                         (part) => `
//                       <div class="form-check mb-2">
//                         <input class="form-check-input spare-part-checkbox" type="checkbox" 
//                           id="part-${part._id}" data-id="${
//                           part._id
//                         }" data-price="${part.price}">
//                         <label class="form-check-label" for="part-${part._id}">
//                           ${part.name} - ${formatCurrency(part.price)} 
//                           (${part.quantity} available)
//                         </label>
//                         <div class="ms-4 mt-1 d-none quantity-input">
//                           <input type="number" class="form-control form-control-sm w-25" 
//                             min="1" max="${part.quantity}" value="1">
//                         </div>
//                       </div>
//                     `
//                       )
//                       .join("")}
//                   </div>
//                 </div>
                
//                 <div class="mb-4">
//                   <label for="scheduleDate" class="form-label">Preferred Service Date</label>
//                   <input type="datetime-local" class="form-control" id="scheduleDate" required>
//                 </div>

//                 <div class="mb-4 d-none" id="estimatedCostContainer">
//                   <h5>Estimated Cost</h5>
//                   <div class="table-responsive">
//                     <table class="table">
//                       <tr>
//                         <td>Spare Parts:</td>
//                         <td id="partsTotal">$0.00</td>
//                       </tr>
//                       <tr>
//                         <td>Labor (estimated):</td>
//                         <td id="laborTotal">$0.00</td>
//                       </tr>
//                       <tr class="fw-bold">
//                         <td>Total Estimated Cost:</td>
//                         <td id="totalCost">$0.00</td>
//                       </tr>
//                     </table>
//                   </div>
//                 </div>
                
//                 <button type="submit" class="btn btn-primary w-100 py-2">
//                   Submit Request
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   // Update document title
//   document.title = "Submit Support Request - Dern-Support";

//   // Add event listeners for spare parts selection
//   document.querySelectorAll(".spare-part-checkbox").forEach((checkbox) => {
//     checkbox.addEventListener("change", (e) => {
//       const quantityInput = e.target
//         .closest(".form-check")
//         .querySelector(".quantity-input");
//       if (e.target.checked) {
//         quantityInput.classList.remove("d-none");
//       } else {
//         quantityInput.classList.add("d-none");
//       }
//       updateEstimatedCost();
//     });
//   });

//   // Add event listeners for quantity changes
//   document.querySelectorAll(".quantity-input input").forEach((input) => {
//     input.addEventListener("change", updateEstimatedCost);
//   });

//   function updateEstimatedCost() {
//     let partsTotal = 0;
//     document
//       .querySelectorAll(".spare-part-checkbox:checked")
//       .forEach((checkbox) => {
//         const price = parseFloat(checkbox.dataset.price);
//         const quantity = parseInt(
//           checkbox.closest(".form-check").querySelector(".quantity-input input")
//             .value
//         );
//         partsTotal += price * quantity;
//       });

//     // Calculate labor cost (example: $50 per hour, estimated 2 hours)
//     const laborCost = 100;

//     document
//       .getElementById("estimatedCostContainer")
//       .classList.remove("d-none");
//     document.getElementById("partsTotal").textContent =
//       formatCurrency(partsTotal);
//     document.getElementById("laborTotal").textContent =
//       formatCurrency(laborCost);
//     document.getElementById("totalCost").textContent = formatCurrency(
//       partsTotal + laborCost
//     );
//   }

//   // Add form submission handler
//   window.handleSupportRequest = async (e) => {
//     e.preventDefault();

//     const selectedParts = [];
//     document
//       .querySelectorAll(".spare-part-checkbox:checked")
//       .forEach((checkbox) => {
//         const quantity = parseInt(
//           checkbox.closest(".form-check").querySelector(".quantity-input input")
//             .value
//         );
//         selectedParts.push({
//           partId: checkbox.dataset.id,
//           quantity,
//         });
//       });

//     const formData = {
//       deviceType: document.getElementById("deviceType").value,
//       issueSummary: document.getElementById("issueSummary").value,
//       description: document.getElementById("description").value,
//       location: document.getElementById("location").value,
//       scheduleDate: document.getElementById("scheduleDate").value,
//       spareParts: selectedParts,
//       requiresOnSite:
//         document.getElementById("requiresOnSite")?.checked || false,
//     };

//     try {
//       const response = await authFetch(`${window.API_URL}/requests`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit support request");
//       }

//       showToast(
//         "Success",
//         "Support request submitted successfully!",
//         "success"
//       );
//       window.navigateTo("/dashboard");
//     } catch (error) {
//       showToast("Error", error.message, "error");
//     }
//   };
// }















// import { icons } from "../utils/icons.js";
// import { authFetch } from "../services/auth.js";
// import { showToast, formatCurrency } from "../utils/ui.js";

// export async function renderSupportRequestPage() {
//   const mainContainer = document.getElementById("main-container");
//   const userRole = localStorage.getItem("userRole");

//   try {
//     // Fetch available spare parts
//     const response = await authFetch(`${window.API_URL}/spareparts`);
//     const spareParts = await response.json();

//     mainContainer.innerHTML = `
//       <div class="container py-5 mt-5">
//         <div class="row justify-content-center">
//           <div class="col-lg-8">
//             <div class="card shadow">
//               <div class="card-body p-4">
//                 <h1 class="h3 mb-4">Submit Support Request</h1>
                
//                 <form id="supportRequestForm">
//                   <div class="mb-3">
//                     <label for="deviceType" class="form-label">Device Type</label>
//                     <select class="form-select" id="deviceType" required>
//                       <option value="">Select device type</option>
//                       <option value="laptop">Laptop</option>
//                       <option value="desktop">Desktop</option>
//                       <option value="printer">Printer</option>
//                       <option value="network">Network Equipment</option>
//                       <option value="mobile">Mobile Device</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
                  
//                   <div class="mb-3">
//                     <label for="issueSummary" class="form-label">Issue Summary</label>
//                     <input type="text" class="form-control" id="issueSummary" required
//                       placeholder="Brief description of the issue">
//                   </div>
                  
//                   <div class="mb-3">
//                     <label for="description" class="form-label">Detailed Description</label>
//                     <textarea class="form-control" id="description" rows="4" required
//                       placeholder="Please provide detailed information about the issue"></textarea>
//                   </div>
                  
//                   <div class="mb-3">
//                     <label for="location" class="form-label">Location</label>
//                     <input type="text" class="form-control" id="location" required
//                       placeholder="Where is the device located?">
//                   </div>

//                   ${
//                     userRole === "business"
//                       ? `
//                     <div class="mb-3">
//                       <div class="form-check">
//                         <input class="form-check-input" type="checkbox" id="requiresOnSite">
//                         <label class="form-check-label" for="requiresOnSite">
//                           Request On-Site Support
//                         </label>
//                       </div>
//                       <div class="form-text">Our technician will visit your location for support</div>
//                     </div>
//                   `
//                       : ""
//                   }
                  
//                   <div class="mb-3">
//                     <label class="form-label">Spare Parts Needed</label>
//                     <div id="sparePartsContainer">
//                       ${spareParts.map(
//                           (part) => `
//                         <div class="form-check mb-2">
//                           <input class="form-check-input spare-part-checkbox" type="checkbox" 
//                             id="part-${part._id}" data-id="${
//                             part._id
//                           }" data-price="${part.price}">
//                           <label class="form-check-label" for="part-${
//                             part._id
//                           }">
//                             ${part.name} - ${formatCurrency(part.price)} 
//                             (${part.quantity} available)
//                           </label>
//                           <div class="ms-4 mt-1 d-none quantity-input">
//                             <input type="number" class="form-control form-control-sm w-25" 
//                               min="1" max="${part.quantity}" value="1">
//                           </div>
//                         </div>
//                       `
//                         )
//                         .join("")}
//                     </div>
//                   </div>
                  
//                   <div class="mb-4">
//                     <label for="scheduleDate" class="form-label">Preferred Service Date</label>
//                     <input type="datetime-local" class="form-control" id="scheduleDate" required>
//                   </div>

//                   <div class="mb-4 d-none" id="estimatedCostContainer">
//                     <h5>Estimated Cost</h5>
//                     <div class="table-responsive">
//                       <table class="table">
//                         <tr>
//                           <td>Spare Parts:</td>
//                           <td id="partsTotal">$0.00</td>
//                         </tr>
//                         <tr>
//                           <td>Labor (estimated):</td>
//                           <td id="laborTotal">$0.00</td>
//                         </tr>
//                         <tr class="fw-bold">
//                           <td>Total Estimated Cost:</td>
//                           <td id="totalCost">$0.00</td>
//                         </tr>
//                       </table>
//                     </div>
//                   </div>
                  
//                   <button type="submit" class="btn btn-primary w-100 py-2">
//                     Submit Request
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;

//     // Add event listeners for spare parts selection
//     document.querySelectorAll(".spare-part-checkbox").forEach((checkbox) => {
//       checkbox.addEventListener("change", (e) => {
//         const quantityInput = e.target
//           .closest(".form-check")
//           .querySelector(".quantity-input");
//         if (e.target.checked) {
//           quantityInput.classList.remove("d-none");
//         } else {
//           quantityInput.classList.add("d-none");
//         }
//         updateEstimatedCost();
//       });
//     });

//     // Add event listeners for quantity changes
//     document.querySelectorAll(".quantity-input input").forEach((input) => {
//       input.addEventListener("change", updateEstimatedCost);
//     });

//     // Add form submission handler
//     document
//       .getElementById("supportRequestForm")
//       .addEventListener("submit", handleSupportRequest);
//   } catch (error) {
//     console.error("Error loading support request page:", error);
//     mainContainer.innerHTML = `
//       <div class="container mt-5 pt-5">
//         <div class="alert alert-danger" role="alert">
//           Failed to load the support request form. Please try again later.
//         </div>
//       </div>
//     `;
//   }
// }

// function updateEstimatedCost() {
//   let partsTotal = 0;
//   document
//     .querySelectorAll(".spare-part-checkbox:checked")
//     .forEach((checkbox) => {
//       const price = parseFloat(checkbox.dataset.price);
//       const quantity = parseInt(
//         checkbox.closest(".form-check").querySelector(".quantity-input input")
//           .value
//       );
//       partsTotal += price * quantity;
//     });

//   // Calculate labor cost (example: $50 per hour, estimated 2 hours)
//   const laborCost = 100;

//   document.getElementById("estimatedCostContainer").classList.remove("d-none");
//   document.getElementById("partsTotal").textContent =
//     formatCurrency(partsTotal);
//   document.getElementById("laborTotal").textContent = formatCurrency(laborCost);
//   document.getElementById("totalCost").textContent = formatCurrency(
//     partsTotal + laborCost
//   );
// }

// async function handleSupportRequest(e) {
//   e.preventDefault();

//   const selectedParts = [];
//   document
//     .querySelectorAll(".spare-part-checkbox:checked")
//     .forEach((checkbox) => {
//       const quantity = parseInt(
//         checkbox.closest(".form-check").querySelector(".quantity-input input")
//           .value
//       );
//       selectedParts.push({
//         partId: checkbox.dataset.id,
//         quantity,
//       });
//     });

//   const formData = {
//     deviceType: document.getElementById("deviceType").value,
//     issueSummary: document.getElementById("issueSummary").value,
//     description: document.getElementById("description").value,
//     location: document.getElementById("location").value,
//     scheduleDate: document.getElementById("scheduleDate").value,
//     spareParts: selectedParts,
//     requiresOnSite: document.getElementById("requiresOnSite")?.checked || false,
//     estimatedCost: {
//       parts: parseFloat(
//         document
//           .getElementById("partsTotal")
//           .textContent.replace(/[^0-9.-]+/g, "")
//       ),
//       labor: parseFloat(
//         document
//           .getElementById("laborTotal")
//           .textContent.replace(/[^0-9.-]+/g, "")
//       ),
//       total: parseFloat(
//         document
//           .getElementById("totalCost")
//           .textContent.replace(/[^0-9.-]+/g, "")
//       ),
//     },
//   };

//   try {
//     const response = await authFetch(`${window.API_URL}/requests`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit support request");
//     }

//     showToast("Success", "Support request submitted successfully!", "success");
//     window.navigateTo("/dashboard");
//   } catch (error) {
//     showToast("Error", error.message, "error");
//   }
// }










import { icons } from '../utils/icons.js';
import { authFetch } from '../services/auth.js';
import { showToast, formatCurrency } from '../utils/ui.js';

export async function renderSupportRequestPage() {
  const mainContainer = document.getElementById('main-container');
  const userRole = localStorage.getItem('userRole');
  
  try {
    // Fetch available spare parts
    const response = await authFetch(`${window.API_URL}/spareparts`);
    const spareParts = await response.json();
    
    if (!Array.isArray(spareParts)) {
      throw new Error('Invalid spare parts data received');
    }
    
    mainContainer.innerHTML = `
      <div class="container py-5 mt-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow">
              <div class="card-body p-4">
                <h1 class="h3 mb-4">Submit Support Request</h1>
                
                <form id="supportRequestForm">
                  <div class="mb-3">
                    <label for="deviceType" class="form-label">Device Type</label>
                    <select class="form-select" id="deviceType" required>
                      <option value="">Select device type</option>
                      <option value="laptop">Laptop</option>
                      <option value="desktop">Desktop</option>
                      <option value="printer">Printer</option>
                      <option value="network">Network Equipment</option>
                      <option value="mobile">Mobile Device</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div class="mb-3">
                    <label for="issueSummary" class="form-label">Issue Summary</label>
                    <input type="text" class="form-control" id="issueSummary" required
                      placeholder="Brief description of the issue">
                  </div>
                  
                  <div class="mb-3">
                    <label for="description" class="form-label">Detailed Description</label>
                    <textarea class="form-control" id="description" rows="4" required
                      placeholder="Please provide detailed information about the issue"></textarea>
                  </div>
                  
                  <div class="mb-3">
                    <label for="location" class="form-label">Location</label>
                    <input type="text" class="form-control" id="location" required
                      placeholder="Where is the device located?">
                  </div>

                  ${userRole === 'business' ? `
                    <div class="mb-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="requiresOnSite">
                        <label class="form-check-label" for="requiresOnSite">
                          Request On-Site Support
                        </label>
                      </div>
                      <div class="form-text">Our technician will visit your location for support</div>
                    </div>
                  ` : ''}
                  
                  <div class="mb-3">
                    <label class="form-label">Spare Parts Needed</label>
                    <div id="sparePartsContainer">
                      ${spareParts.map(part => `
                        <div class="form-check mb-2">
                          <input class="form-check-input spare-part-checkbox" type="checkbox" 
                            id="part-${part._id}" data-id="${part._id}" data-price="${part.price}">
                          <label class="form-check-label" for="part-${part._id}">
                            ${part.name} - ${formatCurrency(part.price)} 
                            (${part.quantity} available)
                          </label>
                          <div class="ms-4 mt-1 d-none quantity-input">
                            <input type="number" class="form-control form-control-sm w-25" 
                              min="1" max="${part.quantity}" value="1">
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  
                  <div class="mb-4">
                    <label for="scheduleDate" class="form-label">Preferred Service Date</label>
                    <input type="datetime-local" class="form-control" id="scheduleDate" required>
                  </div>

                  <div class="mb-4 d-none" id="estimatedCostContainer">
                    <h5>Estimated Cost</h5>
                    <div class="table-responsive">
                      <table class="table">
                        <tr>
                          <td>Spare Parts:</td>
                          <td id="partsTotal">$0.00</td>
                        </tr>
                        <tr>
                          <td>Labor (estimated):</td>
                          <td id="laborTotal">$0.00</td>
                        </tr>
                        <tr class="fw-bold">
                          <td>Total Estimated Cost:</td>
                          <td id="totalCost">$0.00</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  
                  <button type="submit" class="btn btn-primary w-100 py-2">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners for spare parts selection
    document.querySelectorAll('.spare-part-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const quantityInput = e.target.closest('.form-check').querySelector('.quantity-input');
        if (e.target.checked) {
          quantityInput.classList.remove('d-none');
        } else {
          quantityInput.classList.add('d-none');
        }
        updateEstimatedCost();
      });
    });

    // Add event listeners for quantity changes
    document.querySelectorAll('.quantity-input input').forEach(input => {
      input.addEventListener('change', updateEstimatedCost);
    });

    // Add form submission handler
    document.getElementById('supportRequestForm').addEventListener('submit', handleSupportRequest);

  } catch (error) {
    console.error('Error loading support request page:', error);
    mainContainer.innerHTML = `
      <div class="container mt-5 pt-5">
        <div class="alert alert-danger" role="alert">
          Failed to load the support request form. Please try again later.
          <br>
          Error: ${error.message}
        </div>
      </div>
    `;
  }
}

function updateEstimatedCost() {
  let partsTotal = 0;
  document.querySelectorAll('.spare-part-checkbox:checked').forEach(checkbox => {
    const price = parseFloat(checkbox.dataset.price);
    const quantity = parseInt(checkbox.closest('.form-check').querySelector('.quantity-input input').value);
    partsTotal += price * quantity;
  });

  // Calculate labor cost (example: $50 per hour, estimated 2 hours)
  const laborCost = 100;

  document.getElementById('estimatedCostContainer').classList.remove('d-none');
  document.getElementById('partsTotal').textContent = formatCurrency(partsTotal);
  document.getElementById('laborTotal').textContent = formatCurrency(laborCost);
  document.getElementById('totalCost').textContent = formatCurrency(partsTotal + laborCost);
}

async function handleSupportRequest(e) {
  e.preventDefault();
  
  const selectedParts = [];
  document.querySelectorAll('.spare-part-checkbox:checked').forEach(checkbox => {
    const quantity = parseInt(checkbox.closest('.form-check').querySelector('.quantity-input input').value);
    selectedParts.push({
      partId: checkbox.dataset.id,
      quantity
    });
  });

  const formData = {
    deviceType: document.getElementById('deviceType').value,
    issueSummary: document.getElementById('issueSummary').value,
    description: document.getElementById('description').value,
    location: document.getElementById('location').value,
    scheduleDate: document.getElementById('scheduleDate').value,
    spareParts: selectedParts,
    requiresOnSite: document.getElementById('requiresOnSite')?.checked || false,
    estimatedCost: {
      parts: parseFloat(document.getElementById('partsTotal').textContent.replace(/[^0-9.-]+/g, '')),
      labor: parseFloat(document.getElementById('laborTotal').textContent.replace(/[^0-9.-]+/g, '')),
      total: parseFloat(document.getElementById('totalCost').textContent.replace(/[^0-9.-]+/g, ''))
    }
  };
  
  try {
    const response = await authFetch(`${window.API_URL}/requests`, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    
    showToast('Success', 'Support request submitted successfully!', 'success');
    window.navigateTo('/dashboard');
  } catch (error) {
    showToast('Error', error.message, 'error');
  }
}