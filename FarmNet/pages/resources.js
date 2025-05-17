// Sample resources
const resources = [
    {
        title: 'Cattle Feed Optimization Guide',
        type: 'guide',
        category: 'cattle',
        format: 'PDF',
        length: '15 pages',
        url: '#'
    },
    {
        title: 'Goat Breeding Best Practices',
        type: 'video',
        category: 'goat',
        format: 'Video',
        length: '22 min',
        url: '#'
    },
    {
        title: 'Sheep Disease Prevention',
        type: 'guide',
        category: 'sheep',
        format: 'PDF',
        length: '12 pages',
        url: '#'
    },
    {
        title: 'Livestock Budget Calculator',
        type: 'tool',
        category: 'economics',
        format: 'Interactive',
        length: 'Tool',
        url: '#'
    },
    {
        title: 'Organic Cattle Farming',
        type: 'video',
        category: 'cattle',
        format: 'Video',
        length: '35 min',
        url: '#'
    },
    {
        title: 'Market Price Trends Analysis',
        type: 'report',
        category: 'economics',
        format: 'PDF',
        length: '28 pages',
        url: '#'
    }
];

// Display resources
function displayResources() {
    const container = document.getElementById('resources-container');

    container.innerHTML = resources.map(resource => `
      <div class="card resource-card ${resource.category}">
        <div class="resource-icon">
          <i class="fas fa-${resource.type === 'video' ? 'play-circle' :
            resource.type === 'tool' ? 'calculator' :
                'file-alt'}"></i>
        </div>
        <div class="card-body">
          <div class="resource-category">${resource.category.toUpperCase()}</div>
          <h3 class="card-title">${resource.title}</h3>
          <div class="resource-meta">
            <span class="format">${resource.format}</span>
            <span class="length">${resource.length}</span>
          </div>
          <a href="${resource.url}" class="btn btn-outline btn-block">View Resource</a>
        </div>
      </div>
    `).join('');
}

// Initialize resources page
document.addEventListener('DOMContentLoaded', () => {
    displayResources();
});