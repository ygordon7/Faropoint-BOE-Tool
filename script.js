document.getElementById('calculateButton').addEventListener('click', function() {
    // Retrieve inputs
    let purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    let sf = parseFloat(document.getElementById('sf').value);
    let inPlaceRent = parseFloat(document.getElementById('inPlaceRent').value);
    let trendedMarketRentGrowth = parseFloat(document.getElementById('trendedMarketRentGrowth').value);
    let marketRent = parseFloat(document.getElementById('marketRent').value);
    
    // Verify the inputs
    if (isNaN(purchasePrice) || isNaN(sf) || isNaN(inPlaceRent) || isNaN(trendedMarketRentGrowth) || isNaN(marketRent)) {
        alert('Please ensure all fields are filled with valid numeric values.');
        return;
    }

    // Calculations
    let pricePSF = purchasePrice / sf;
    let inPlaceNOI = inPlaceRent * sf;
    let inPlaceCapRate = inPlaceNOI / purchasePrice;
    let marketNOI = marketRent * sf;
    let marketCapRate = marketNOI / purchasePrice;
    let trendedMarketRent = marketRent * (1 + trendedMarketRentGrowth / 100);
    let trendedMarketNOI = trendedMarketRent * sf;
    let trendedMarketCapRate = trendedMarketNOI / purchasePrice;

    // Display the results
    document.getElementById('pricePSF').textContent = `Price PSF: $${pricePSF.toFixed(2)}`;
    document.getElementById('inPlaceCapRate').textContent = `In-place Cap Rate: ${(inPlaceCapRate * 100).toFixed(2)}%`;
    document.getElementById('marketCapRate').textContent = `Market Cap Rate: ${(marketCapRate * 100).toFixed(2)}%`;
    document.getElementById('trendedMarketRent').textContent = `Trended Market Rent: $${trendedMarketRent.toFixed(2)}`;
    document.getElementById('trendedMarketCapRate').textContent = `Trended Market Cap Rate: ${(trendedMarketCapRate * 100).toFixed(2)}%`;
});
