function performCalculations() {
    // Input retrieval
    const rsf = parseFloat(document.getElementById('rsf').value);
    const price = parseFloat(document.getElementById('price').value);
    const inPlaceNOI = parseFloat(document.getElementById('inPlaceNOI').value);
    const marketRent = parseFloat(document.getElementById('marketRent').value);
    const costToStabilize = parseFloat(document.getElementById('costToStabilize').value);
    const marketRentGrowth = parseFloat(document.getElementById('marketRentGrowth').value) / 100; 
    const investmentHorizon = parseInt(document.getElementById('investmentHorizon').value);

    // Calculations
    const pricePerSF = price / rsf;
    const totalCostPerSF = pricePerSF + costToStabilize;
    const inPlaceCapRate = (inPlaceNOI / pricePerSF) * 100;
    const marketCapRate = (marketRent / pricePerSF) * 100;
    const marketYieldOnCost = marketRent / totalCostPerSF;
    const trendedMarket = marketRent * (Math.pow((1 + marketRentGrowth), investmentHorizon));
    const trendedMarketCap = trendedMarket / pricePerSF;
    const trendedMarketYOC = trendedMarket / totalCostPerSF;

    // Displaying outputs
    document.getElementById('summaryRSF').textContent = rsf.toLocaleString();
    document.getElementById('summaryPrice').textContent = `$${price.toLocaleString()}`;
    document.getElementById('pricePerSF').textContent = `$${pricePerSF.toFixed(2)}`;
    document.getElementById('costToStabilizeOutput').textContent = `$${costToStabilize.toFixed(2)}`;
    document.getElementById('totalCostPerSF').textContent = `$${totalCostPerSF.toFixed(2)}`;
    document.getElementById('inPlaceNOIOutput').textContent = `$${inPlaceNOI.toFixed(2)}`;
    document.getElementById('inPlaceCapRate').textContent = `${inPlaceCapRate.toFixed(2)}%`;
    document.getElementById('marketRentOutput').textContent = `$${marketRent.toFixed(2)}`;
    document.getElementById('marketCapRate').textContent = `${marketCapRate.toFixed(2)}%`;
    document.getElementById('marketYieldOnCost').textContent = `$${marketYieldOnCost.toFixed(2)}`;
    document.getElementById('trendedMarket').textContent = `$${trendedMarket.toFixed(2)}`;
    document.getElementById('trendedMarketCap').textContent = `${trendedMarketCap.toFixed(2)}%`;
    document.getElementById('trendedMarketYOC').textContent = `$${trendedMarketYOC.toFixed(2)}`;
}
