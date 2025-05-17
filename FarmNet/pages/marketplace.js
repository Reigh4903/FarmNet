// Sample listings data
const listings = [
    {
        id: 1,
        title: '10 Healthy Goats for Sale',
        price: '₹22,000',
        location: 'Gauteng Region',
        category: 'goat',
        image: 'goats.jpg',
        description: 'Healthy goats, 6-8 months old, vaccinated.'
    },
    {
        id: 2,
        title: 'Premium Cattle Feed',
        price: '₹1,150 per bag',
        location: 'North West Region',
        category: 'feed',
        image: 'feed.jpg',
        description: 'High-quality cattle feed, 50kg bags.'
    },
    {
        id: 3,
        title: 'Dairy Cows (Friesian)',
        price: '₹65,000',
        location: 'Kwa Zulu Natal Region',
        category: 'cattle',
        image: 'cows.jpg',
        description: 'Pure Friesian dairy cows, high milk production.'
    },
    {
        id: 4,
        title: 'Sheep Flock (20 heads)',
        price: '₹4,00,000',
        location: 'Mpumalanga Region',
        category: 'sheep',
        image: 'sheep.jpg',
        description: 'Healthy sheep flock, ideal for breeding.'
    },
    {
        id: 5,
        title: 'Milking Machine',
        price: '₹15,000',
        location: 'Nothern Cape Region',
        category: 'equipment',
        image: 'milking-machine.jpg',
        description: 'Portable milking machine, barely used.'
    },
    {
        id: 6,
        title: 'Organic Hay Bales',
        price: '₹320 per bale',
        location: 'Western Cape Region',
        category: 'feed',
        image: 'hay.jpg',
        description: 'High-quality organic hay, 20kg bales.'
    },
    {
        id: 7,
        title: 'Milking Machine',
        price: '₹15,000',
        location: 'Free State Region',
        category: 'equipment',
        image: 'milking-machine.jpg',
        description: 'Portable milking machine, barely used.'
    },
    {
        id: 8,
        title: 'Milking Machine',
        price: '₹15,000',
        location: 'Limpopo Region',
        category: 'equipment',
        image: 'milking-machine.jpg',
        description: 'Portable milking machine, barely used.'
    },
    {
        id: 9,
        title: 'Milking Machine',
        price: '₹15,000',
        location: 'Eastern Cape Region',
        category: 'equipment',
        image: 'milking-machine.jpg',
        description: 'Portable milking machine, barely used.'
    },
];

// Display listings
function displayListings() {
    const container = document.getElementById('listings-container');
    container.innerHTML = listings.map(listing => `
      <div class="card">
        <div class="card-img" style="background-image: url('../assets/images/${listing.image}');"></div>
        <div class="card-body">
          <div class="listing-category">${listing.category.toUpperCase()}</div>
          <h3 class="card-title">${listing.title}</h3>
          <p class="card-text">${listing.description}</p>
          <div class="listing-meta">
            <span class="price">${listing.price}</span>
            <span class="location"><i class="fas fa-map-marker-alt"></i> ${listing.location}</span>
          </div>
          <button class="btn btn-outline btn-block contact-btn" data-id="${listing.id}">Contact Seller</button>
        </div>
      </div>
    `).join('');
}

// Toggle filters
document.getElementById('filter-btn').addEventListener('click', () => {
    const filters = document.getElementById('marketplace-filters');
    filters.style.display = filters.style.display === 'none' ? 'grid' : 'none';
});

// Initialize marketplace
document.addEventListener('DOMContentLoaded', () => {
    displayListings();

    // Hide filters by default
    document.getElementById('marketplace-filters').style.display = 'none';

    // Contact seller button handler
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const listingId = this.getAttribute('data-id');
            alert(`Contacting seller for listing #${listingId}. In a real app, this would open a chat/message system.`);
        });
    });
});