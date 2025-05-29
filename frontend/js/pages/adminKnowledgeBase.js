import { icons } from "../utils/icons.js";
import { authFetch } from "../services/auth.js";
import { showToast } from "../utils/ui.js";

export async function renderAdminKnowledgeBasePage() {
  const mainContainer = document.getElementById("main-container");

  mainContainer.innerHTML = `
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1>Knowledge Base Management</h1>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addArticleModal">
            ${icons.plus} Add New Article
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white">
              <div class="input-group">
                <input type="text" class="form-control" id="searchInput" placeholder="Search articles...">
                <button class="btn btn-primary" type="button" id="searchButton">
                  ${icons.search}
                </button>
              </div>
            </div>
            <div class="card-body">
              <div id="articlesContainer">
                <p class="text-center py-4">Loading articles...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white">
              <h5 class="mb-0">Popular Tags</h5>
            </div>
            <div class="card-body">
              <div id="tagsContainer">Loading tags...</div>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-header bg-white">
              <h5 class="mb-0">Quick Stats</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <span>Total Articles</span>
                <span class="badge bg-primary" id="totalArticles">0</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Total Tags</span>
                <span class="badge bg-primary" id="totalTags">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Article Modal -->
    <div class="modal fade" id="addArticleModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Article</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="addArticleForm">
              <div class="mb-3">
                <label for="articleTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="articleTitle" required>
              </div>
              <div class="mb-3">
                <label for="articleContent" class="form-label">Content</label>
                <textarea class="form-control" id="articleContent" rows="10" required></textarea>
              </div>
              <div class="mb-3">
                <label for="articleTags" class="form-label">Tags (comma separated)</label>
                <input type="text" class="form-control" id="articleTags" placeholder="hardware, software, network">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleAddArticle()">Add Article</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Article Modal -->
    <div class="modal fade" id="editArticleModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Article</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="editArticleForm">
              <input type="hidden" id="editArticleId">
              <div class="mb-3">
                <label for="editArticleTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="editArticleTitle" required>
              </div>
              <div class="mb-3">
                <label for="editArticleContent" class="form-label">Content</label>
                <textarea class="form-control" id="editArticleContent" rows="10" required></textarea>
              </div>
              <div class="mb-3">
                <label for="editArticleTags" class="form-label">Tags (comma separated)</label>
                <input type="text" class="form-control" id="editArticleTags">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleEditArticle()">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Update document title
  document.title = "Knowledge Base Management - Admin Dashboard";

  // Load articles and tags
  loadArticles();
  loadTags();

  // Add event listeners
  setupEventListeners();

  // Add global handlers for modal functions
  window.handleAddArticle = async () => {
    const form = document.getElementById("addArticleForm");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const articleData = {
      title: document.getElementById("articleTitle").value,
      content: document.getElementById("articleContent").value,
      tags: document
        .getElementById("articleTags")
        .value.split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    try {
      const response = await authFetch(`${window.API_URL}/kb`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (response.ok) {
        showToast("Success", "Article added successfully", "success");
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("addArticleModal")
        );
        modal.hide();
        form.reset();
        loadArticles();
        loadTags();
      } else {
        throw new Error("Failed to add article");
      }
    } catch (error) {
      console.error("Error adding article:", error);
      showToast("Error", "Failed to add article", "error");
    }
  };

  window.handleEditArticle = async () => {
    const form = document.getElementById("editArticleForm");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const articleId = document.getElementById("editArticleId").value;
    const articleData = {
      title: document.getElementById("editArticleTitle").value,
      content: document.getElementById("editArticleContent").value,
      tags: document
        .getElementById("editArticleTags")
        .value.split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    try {
      const response = await authFetch(`${window.API_URL}/kb/${articleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (response.ok) {
        showToast("Success", "Article updated successfully", "success");
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("editArticleModal")
        );
        modal.hide();
        loadArticles();
        loadTags();
      } else {
        throw new Error("Failed to update article");
      }
    } catch (error) {
      console.error("Error updating article:", error);
      showToast("Error", "Failed to update article", "error");
    }
  };
}

async function loadArticles() {
  try {
    const response = await authFetch(`${window.API_URL}/kb`);
    const articles = await response.json();
    displayArticles(articles);
    updateStats(articles);
  } catch (error) {
    console.error("Error loading articles:", error);
    showToast("Error", "Failed to load articles", "error");
  }
}

function displayArticles(articles) {
  const container = document.getElementById("articlesContainer");

  if (!articles || articles.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4">
        <p class="mb-0">No articles found</p>
      </div>
    `;
    return;
  }

  container.innerHTML = articles
    .map(
      (article) => `
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <h3 class="h5 mb-0">${article.title}</h3>
          <div class="btn-group">
            <button class="btn btn-sm btn-outline-primary" onclick="editArticle('${
              article._id
            }')">
              ${icons.edit}
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="deleteArticle('${
              article._id
            }')">
              ${icons.trash}
            </button>
          </div>
        </div>
        <p class="mb-3">${article.content}</p>
        <div class="d-flex flex-wrap gap-2">
          ${article.tags
            .map(
              (tag) => `
            <span class="badge bg-secondary">${tag}</span>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Add global handlers for edit and delete
  window.editArticle = async (articleId) => {
    try {
      const response = await authFetch(`${window.API_URL}/kb/${articleId}`);
      const article = await response.json();

      document.getElementById("editArticleId").value = article._id;
      document.getElementById("editArticleTitle").value = article.title;
      document.getElementById("editArticleContent").value = article.content;
      document.getElementById("editArticleTags").value =
        article.tags.join(", ");

      const modal = new bootstrap.Modal(
        document.getElementById("editArticleModal")
      );
      modal.show();
    } catch (error) {
      console.error("Error loading article details:", error);
      showToast("Error", "Failed to load article details", "error");
    }
  };

  window.deleteArticle = async (articleId) => {
    if (confirm("Are you sure you want to delete this article?")) {
      try {
        const response = await authFetch(`${window.API_URL}/kb/${articleId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          showToast("Success", "Article deleted successfully", "success");
          loadArticles();
          loadTags();
        } else {
          throw new Error("Failed to delete article");
        }
      } catch (error) {
        console.error("Error deleting article:", error);
        showToast("Error", "Failed to delete article", "error");
      }
    }
  };
}

function loadTags() {
  const container = document.getElementById("tagsContainer");

  authFetch(`${window.API_URL}/kb`)
    .then((response) => response.json())
    .then((articles) => {
      // Count tag occurrences
      const tagCounts = {};
      articles.forEach((article) => {
        article.tags.forEach((tag) => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
      });

      // Sort tags by count
      const sortedTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a)
        .map(([tag, count]) => ({ tag, count }));

      container.innerHTML = `
        <div class="d-flex flex-wrap gap-2">
          ${sortedTags
            .map(
              ({ tag, count }) => `
            <span class="badge bg-primary">
              ${tag} <span class="badge bg-white text-danger">${count}</span>
            </span>
          `
            )
            .join("")}
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error loading tags:", error);
      container.innerHTML = '<p class="text-danger">Failed to load tags</p>';
    });
}

function updateStats(articles) {
  const totalArticles = articles.length;
  const uniqueTags = new Set(articles.flatMap((article) => article.tags)).size;

  document.getElementById("totalArticles").textContent = totalArticles;
  document.getElementById("totalTags").textContent = uniqueTags;
}

function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
      authFetch(
        `${window.API_URL}/kb?keyword=${encodeURIComponent(searchTerm)}`
      )
        .then((response) => response.json())
        .then((articles) => {
          displayArticles(articles);
        })
        .catch((error) => {
          console.error("Error searching articles:", error);
          showToast("Error", "Failed to search articles", "error");
        });
    } else {
      loadArticles();
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });
}
