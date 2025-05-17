// Sample price data (in real app, this would come from API)
const priceData = [
    { commodity: 'Cattle (per kg)', price: '₹180', trend: 'up' },
    { commodity: 'Goat (per kg)', price: '₹220', trend: 'down' },
    { commodity: 'Sheep (per kg)', price: '₹200', trend: 'stable' },
    { commodity: 'Cattle Feed (50kg)', price: '₹1,200', trend: 'up' },
    { commodity: 'Hay (bale)', price: '₹350', trend: 'stable' }
];

// Display price data
function displayPrices() {
    const priceTable = document.getElementById('price-data');
    priceTable.innerHTML = priceData.map(item => `
      <tr>
        <td>${item.commodity}</td>
        <td>${item.price}</td>
        <td>
          <span class="trend ${item.trend}">
            <i class="fas fa-arrow-${item.trend === 'up' ? 'up' : item.trend === 'down' ? 'down' : 'right'}"></i>
            ${item.trend}
          </span>
        </td>
      </tr>
    `).join('');
}

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
    displayPrices();

    // Set up live updates (simulated)
    setInterval(() => {
        // In a real app, this would fetch from API
        console.log('Checking for price updates...');
    }, 30000);
});