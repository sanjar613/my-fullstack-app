import { icons } from "../utils/icons.js";
import { authFetch } from "../services/auth.js";
import { showToast, formatCurrency } from "../utils/ui.js";

export async function renderAdminSparePartsPage() {
  const mainContainer = document.getElementById("main-container");

  mainContainer.innerHTML = `
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1>Spare Parts Inventory</h1>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPartModal">
            ${icons.plus} Add New Part
          </button>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle" id="partsTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Supplier</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="6" class="text-center py-4">Loading spare parts...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Part Modal -->
    <div class="modal fade" id="addPartModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Spare Part</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="addPartForm">
              <div class="mb-3">
                <label for="partName" class="form-label">Part Name</label>
                <input type="text" class="form-control" id="partName" required>
              </div>
              <div class="mb-3">
                <label for="partQuantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="partQuantity" required min="0">
              </div>
              <div class="mb-3">
                <label for="partPrice" class="form-label">Price</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="number" class="form-control" id="partPrice" required min="0" step="0.01">
                </div>
              </div>
              <div class="mb-3">
                <label for="partSupplier" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="partSupplier" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleAddPart()">Add Part</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Part Modal -->
    <div class="modal fade" id="editPartModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Spare Part</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="editPartForm">
              <input type="hidden" id="editPartId">
              <div class="mb-3">
                <label for="editPartName" class="form-label">Part Name</label>
                <input type="text" class="form-control" id="editPartName" required>
              </div>
              <div class="mb-3">
                <label for="editPartQuantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="editPartQuantity" required min="0">
              </div>
              <div class="mb-3">
                <label for="editPartPrice" class="form-label">Price</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="number" class="form-control" id="editPartPrice" required min="0" step="0.01">
                </div>
              </div>
              <div class="mb-3">
                <label for="editPartSupplier" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="editPartSupplier" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleEditPart()">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Update document title
  document.title = "Spare Parts Inventory - Admin Dashboard";

  // Load spare parts
  loadSpareParts();

  // Add global handlers for modal functions
  window.handleAddPart = async () => {
    const form = document.getElementById("addPartForm");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const partData = {
      name: document.getElementById("partName").value,
      quantity: parseInt(document.getElementById("partQuantity").value),
      price: parseFloat(document.getElementById("partPrice").value),
      supplier: document.getElementById("partSupplier").value,
    };

    try {
      const response = await authFetch(`${window.API_URL}/spareparts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partData),
      });

      if (response.ok) {
        showToast("Success", "Spare part added successfully", "success");
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("addPartModal")
        );
        modal.hide();
        form.reset();
        loadSpareParts();
      } else {
        throw new Error("Failed to add spare part");
      }
    } catch (error) {
      console.error("Error adding spare part:", error);
      showToast("Error", "Failed to add spare part", "error");
    }
  };

  window.handleEditPart = async () => {
    const form = document.getElementById("editPartForm");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const partId = document.getElementById("editPartId").value;
    const partData = {
      name: document.getElementById("editPartName").value,
      quantity: parseInt(document.getElementById("editPartQuantity").value),
      price: parseFloat(document.getElementById("editPartPrice").value),
      supplier: document.getElementById("editPartSupplier").value,
    };

    try {
      const response = await authFetch(
        `${window.API_URL}/spareparts/${partId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(partData),
        }
      );

      if (response.ok) {
        showToast("Success", "Spare part updated successfully", "success");
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("editPartModal")
        );
        modal.hide();
        loadSpareParts();
      } else {
        throw new Error("Failed to update spare part");
      }
    } catch (error) {
      console.error("Error updating spare part:", error);
      showToast("Error", "Failed to update spare part", "error");
    }
  };
}

async function loadSpareParts() {
  try {
    const response = await authFetch(`${window.API_URL}/spareparts`);
    const parts = await response.json();
    displaySpareParts(parts);
  } catch (error) {
    console.error("Error loading spare parts:", error);
    showToast("Error", "Failed to load spare parts", "error");
  }
}

function displaySpareParts(parts) {
  const tbody = document.querySelector("#partsTable tbody");

  if (!parts || parts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-4">No spare parts found</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = parts
    .map(
      (part) => `
    <tr>
      <td>${part.name}</td>
      <td>
        <span class="badge ${
          part.quantity > 10
            ? "bg-success"
            : part.quantity > 5
            ? "bg-warning"
            : "bg-danger"
        }">
          ${part.quantity}
        </span>
      </td>
      <td>${formatCurrency(part.price)}</td>
      <td>${part.supplier}</td>
      <td>${new Date(part.updatedAt).toLocaleDateString()}</td>
      <td>
        <div class="btn-group">
          <button class="btn btn-sm btn-outline-primary" onclick="editPart('${
            part._id
          }')">
            ${icons.edit}
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deletePart('${
            part._id
          }')">
            ${icons.trash}
          </button>
        </div>
      </td>
    </tr>
  `
    )
    .join("");

  // Add global handlers for edit and delete
  window.editPart = async (partId) => {
    try {
      const response = await authFetch(
        `${window.API_URL}/spareparts/${partId}`
      );
      const part = await response.json();

      document.getElementById("editPartId").value = part._id;
      document.getElementById("editPartName").value = part.name;
      document.getElementById("editPartQuantity").value = part.quantity;
      document.getElementById("editPartPrice").value = part.price;
      document.getElementById("editPartSupplier").value = part.supplier;

      const modal = new bootstrap.Modal(
        document.getElementById("editPartModal")
      );
      modal.show();
    } catch (error) {
      console.error("Error loading part details:", error);
      showToast("Error", "Failed to load part details", "error");
    }
  };

  window.deletePart = async (partId) => {
    if (confirm("Are you sure you want to delete this spare part?")) {
      try {
        const response = await authFetch(
          `${window.API_URL}/spareparts/${partId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          showToast("Success", "Spare part deleted successfully", "success");
          loadSpareParts();
        } else {
          throw new Error("Failed to delete spare part");
        }
      } catch (error) {
        console.error("Error deleting spare part:", error);
        showToast("Error", "Failed to delete spare part", "error");
      }
    }
  };
}
