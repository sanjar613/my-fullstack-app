import { icons } from '../utils/icons.js';
import { showToast } from '../utils/ui.js';

export async function renderKnowledgeBasePage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container py-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="mb-4">Knowledge Base</h1>
          
          <div class="mb-4">
            <div class="input-group">
              <input type="text" class="form-control" id="searchInput" 
                placeholder="Search articles...">
              <button class="btn btn-primary" type="button" id="searchButton">
                ${icons.search} Search
              </button>
            </div>
          </div>
          
          <div id="articlesContainer">
            <div class="text-center py-4">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white">
              <h5 class="mb-0">Popular Topics</h5>
            </div>
            <div class="card-body">
              <div class="list-group list-group-flush" id="popularTopics">
                Loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Update document title
  document.title = 'Knowledge Base - Dern-Support';
  
  // Load articles
  loadArticles();
  
  // Add search functionality
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  searchButton.addEventListener('click', () => {
    loadArticles(searchInput.value);
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      loadArticles(searchInput.value);
    }
  });
}

async function loadArticles(keyword = '') {
  try {
    const response = await fetch(`${window.API_URL}/kb${keyword ? `?keyword=${keyword}` : ''}`);
    const articles = await response.json();
    
    displayArticles(articles);
    loadPopularTopics(articles);
  } catch (error) {
    console.error('Error loading articles:', error);
    showToast('Error', 'Failed to load articles', 'error');
  }
}

function displayArticles(articles) {
  const container = document.getElementById('articlesContainer');
  
  if (!articles || articles.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4">
        <p class="mb-0">No articles found.</p>
      </div>
    `;
    return;
  }
  
  const articlesHTML = articles.map(article => `
    <div class="card mb-4 kb-article">
      <div class="card-body">
        <h2 class="h4 kb-article-title">${article.title}</h2>
        <div class="kb-article-meta">
          ${formatDate(article.createdAt)}
        </div>
        <div class="kb-article-content">
          ${article.content}
        </div>
        <div class="kb-article-tags">
          ${article.tags.map(tag => `
            <span class="kb-tag">${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = articlesHTML;
}

function loadPopularTopics(articles) {
  const container = document.getElementById('popularTopics');
  
  // Get unique tags and their counts
  const tagCounts = {};
  articles.forEach(article => {
    article.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  // Sort tags by count
  const sortedTags = Object.entries(tagCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);
  
  const topicsHTML = sortedTags.map(([tag, count]) => `
    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      onclick="return false;">
      ${tag}
      <span class="badge bg-primary rounded-pill">${count}</span>
    </a>
  `).join('');
  
  container.innerHTML = topicsHTML || 'No topics available';
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}