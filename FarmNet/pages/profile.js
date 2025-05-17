// Sample data
const activities = [
    {
        type: 'post',
        title: 'Posted in forum: Best cattle breeds for milk',
        time: '2 hours ago'
    },
    {
        type: 'listing',
        title: 'Added new listing: 5 dairy cows for sale',
        time: '1 day ago'
    },
    {
        type: 'connection',
        title: 'Connected with Amit Patel',
        time: '2 days ago'
    },
    {
        type: 'comment',
        title: 'Commented on feed prices discussion',
        time: '3 days ago'
    }
];

const userListings = [
    {
        title: '5 Dairy Cows for Sale',
        price: '₹3,25,000',
        status: 'active',
        views: 45
    },
    {
        title: 'Hay Bales (20 units)',
        price: '₹6,400',
        status: 'sold',
        views: 32
    },
    {
        title: 'Milking Machine',
        price: '₹12,000',
        status: 'active',
        views: 18
    }
];

const connections = [
    { name: 'Amit Patel', type: 'sheep', since: '2 years' },
    { name: 'Priya Sharma', type: 'goat', since: '1 year' },
    { name: 'Sanjay Gupta', type: 'cattle', since: '8 months' },
    { name: 'Vijay Kumar', type: 'cattle', since: '6 months' },
    { name: 'Neha Singh', type: 'goat', since: '5 months' },
    { name: 'Rahul Verma', type: 'sheep', since: '3 months' }
];

// Display activities
function displayActivities() {
    const container = document.getElementById('activity-list');
    container.innerHTML = activities.map(activity => `
      <div class="activity-item ${activity.type}">
        <div class="activity-icon">
          <i class="fas fa-${activity.type === 'post' ? 'comment' :
            activity.type === 'listing' ? 'store' :
                activity.type === 'connection' ? 'user-plus' : 'comment-dots'
        }"></i>
        </div>
        <div class="activity-content">
          <p class="activity-title">${activity.title}</p>
          <p class="activity-time">${activity.time}</p>
        </div>
      </div>
    `).join('');
}

// Display user listings
function displayUserListings() {
    const container = document.getElementById('user-listings');
    container.innerHTML = userListings.map(listing => `
      <div class="listing-item ${listing.status}">
        <div class="listing-status">${listing.status.toUpperCase()}</div>
        <h3 class="listing-title">${listing.title}</h3>
        <div class="listing-meta">
          <span class="price">${listing.price}</span>
          <span class="views"><i class="fas fa-eye"></i> ${listing.views} views</span>
        </div>
        <div class="listing-actions">
          <button class="btn btn-outline">Edit</button>
          <button class="btn btn-${listing.status === 'active' ? 'danger' : 'primary'}">
            ${listing.status === 'active' ? 'Mark Sold' : 'Relist'}
          </button>
        </div>
      </div>
    `).join('');
}

// Display connections
function displayConnections() {
    const container = document.getElementById('connections-grid');
    container.innerHTML = connections.map(conn => `
      <div class="connection-card">
        <div class="connection-avatar">
          <img src="../assets/images/avatar-${Math.floor(Math.random() * 5) + 1}.jpg" alt="${conn.name}">
        </div>
        <div class="connection-info">
          <h3>${conn.name}</h3>
          <p class="farmer-type"><i class="fas fa-${conn.type === 'cattle' ? 'cow' :
            conn.type === 'goat' ? 'goat' : 'sheep'
        }"></i> ${conn.type.charAt(0).toUpperCase() + conn.type.slice(1)} Farmer</p>
          <p class="connection-since">Connected ${conn.since} ago</p>
        </div>
        <button class="btn btn-outline">Message</button>
      </div>
    `).join('');
}

// Handle tab switching
document.querySelectorAll('.profile-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Update active tab
        document.querySelectorAll('.profile-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Show corresponding content
        const tabId = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Initialize profile page
document.addEventListener('DOMContentLoaded', () => {
    displayActivities();
    displayUserListings();
    displayConnections();
});