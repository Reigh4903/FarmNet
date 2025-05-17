// Sample forum posts
const forumPosts = [
    {
        id: 1,
        title: 'Best feed for dairy cattle?',
        author: 'Rajesh Kumar',
        category: 'cattle',
        date: '2 days ago',
        replies: 12,
        views: 145,
        content: 'Looking for recommendations on high-quality feed for my Friesian cows to boost milk production.'
    },
    {
        id: 2,
        title: 'Goat farming profitability',
        author: 'Priya Sharma',
        category: 'goat',
        date: '5 days ago',
        replies: 8,
        views: 210,
        content: 'Can anyone share their experience with goat farming profitability in the current market?'
    },
    {
        id: 3,
        title: 'Sheep vaccination schedule',
        author: 'Amit Patel',
        category: 'sheep',
        date: '1 week ago',
        replies: 5,
        views: 98,
        content: 'Looking for a comprehensive vaccination schedule for my sheep flock.'
    },
    {
        id: 4,
        title: 'Reducing feed costs',
        author: 'Sanjay Gupta',
        category: 'economics',
        date: '3 days ago',
        replies: 15,
        views: 320,
        content: 'With feed prices rising, what strategies are you using to reduce costs without compromising quality?'
    },
    {
        id: 5,
        title: 'Foot and mouth disease outbreak',
        author: 'Veterinary Dept.',
        category: 'health',
        date: '1 day ago',
        replies: 23,
        views: 450,
        content: 'Alert: Foot and mouth disease reported in neighboring districts. Take precautions.'
    }
];

// Display forum posts
function displayPosts(category = 'all') {
    const container = document.getElementById('posts-container');

    const filteredPosts = category === 'all'
        ? forumPosts
        : forumPosts.filter(post => post.category === category);

    container.innerHTML = filteredPosts.map(post => `
      <div class="post-card">
        <div class="post-category ${post.category}">${post.category.toUpperCase()}</div>
        <div class="post-content">
          <h3 class="post-title">${post.title}</h3>
          <p class="post-excerpt">${post.content}</p>
          <div class="post-meta">
            <span class="post-author"><i class="fas fa-user"></i> ${post.author}</span>
            <span class="post-date"><i class="fas fa-clock"></i> ${post.date}</span>
            <span class="post-replies"><i class="fas fa-comment"></i> ${post.replies} replies</span>
            <span class="post-views"><i class="fas fa-eye"></i> ${post.views} views</span>
          </div>
        </div>
      </div>
    `).join('');
}

// Handle category tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Filter posts
        const category = this.getAttribute('data-category');
        displayPosts(category);
    });
});

// Initialize forum
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
});