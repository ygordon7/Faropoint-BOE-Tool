document.getElementById("calculate").addEventListener("click", function() {
    // Retrieve input values
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    const sf = parseFloat(document.getElementById("sf").value);
    const cost = parseFloat(document.getElementById("cost").value);
    const inPlaceRent = parseFloat(document.getElementById("inPlaceRent").value);
    const marketRent = parseFloat(document.getElementById("marketRent").value);
    const investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value);
    const rentGrowth = parseFloat(document.getElementById("rentGrowth").value) / 100;

    // Calculate derived values
    const pricePerSF = purchasePrice / sf;
    const totalCostPerSF = pricePerSF + cost;
    const inPlaceNOI = inPlaceRent * sf;
    const marketNOI = marketRent * sf;
    const inPlaceCapRate = inPlaceNOI / purchasePrice;
    const marketCapRate = marketNOI / purchasePrice;
    const inPlaceYOC = inPlaceNOI / (sf * totalCostPerSF);
    const marketYOC = marketNOI / (sf * totalCostPerSF);

    let trendedMarketRent = marketRent;
    for (let i = 0; i < investmentHorizon; i++) {
        trendedMarketRent *= (1 + rentGrowth);
    }
    const trendedMarketNOI = trendedMarketRent * sf;
    const trendedMarketCapRate = trendedMarketNOI / purchasePrice;
    const trendedMarketYOC = trendedMarketNOI / (sf * totalCostPerSF);

    // Display results
    document.getElementById("pricePerSFResult").innerText = pricePerSF.toFixed(2);
    document.getElementById("totalCostPerSFResult").innerText = totalCostPerSF.toFixed(2);
    document.getElementById("inPlaceCapRateResult").innerText = (inPlaceCapRate * 100).toFixed(2) + "%";
    document.getElementById("marketCapRateResult").innerText = (marketCapRate * 100).toFixed(2) + "%";
    document.getElementById("inPlaceYOCResult").innerText = (inPlaceYOC * 100).toFixed(2) + "%";
    document.getElementById("marketYOCResult").innerText = (marketYOC * 100).toFixed(2) + "%";
    document.getElementById("trendedMarketRentResult").innerText = trendedMarketRent.toFixed(2);
    document.getElementById("trendedMarketCapRateResult").innerText = (trendedMarketCapRate * 100).toFixed(2) + "%";
    document.getElementById("trendedMarketYOCResult").innerText = (trendedMarketYOC * 100).toFixed(2) + "%";
});
