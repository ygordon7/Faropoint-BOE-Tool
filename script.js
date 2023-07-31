function calculate() {
    // Getting the input values
    const rsf = parseFloat(document.getElementById("rsf").value);
    const price = parseFloat(document.getElementById("price").value);
    const inPlaceNOI = parseFloat(document.getElementById("inPlaceNOI").value);
    const marketRent = parseFloat(document.getElementById("marketRent").value);
    const costStabilize = parseFloat(document.getElementById("costStabilize").value);
    const marketRentGrowth = parseFloat(document.getElementById("marketRentGrowth").value) / 100;
    const investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value);

    // Calculating outputs
    const pricePSF = price / rsf;
    const totalCostPSF = pricePSF + costStabilize;
    const inPlaceCapRate = (inPlaceNOI / pricePSF) * 100;
    const marketCapRate = (marketRent / pricePSF) * 100;
    const marketYieldOnCost = marketRent / totalCostPSF;
    const trendedMarket = marketRent * Math.pow((1 + marketRentGrowth), investmentHorizon);
    const trendedMarketCap = trendedMarket / pricePSF;
    const trendedMarketYOC = trendedMarket / totalCostPSF;

    // Displaying the results
    document.getElementById("outputRSF").innerText = rsf.toLocaleString();
    document.getElementById("outputPrice").innerText = `$${price.toLocaleString()}`;
    document.getElementById("outputPricePSF").innerText = `$${pricePSF.toFixed(2)}`;
    document.getElementById("outputCostStabilize").innerText = `$${costStabilize.toFixed(2)}`;
    document.getElementById("outputTotalCost").innerText = `$${totalCostPSF.toFixed(2)}`;
    document.getElementById("outputInPlaceNOI").innerText = `$${inPlaceNOI.toFixed(2)}`;
    document.getElementById("outputInPlaceCapRate").innerText = `${inPlaceCapRate.toFixed(2)}%`;
    document.getElementById("outputMarketRent").innerText = `$${marketRent.toFixed(2)}`;
    document.getElementById("outputMarketCapRate").innerText = `${marketCapRate.toFixed(2)}%`;
    document.getElementById("outputMarketYieldOnCost").innerText = `$${marketYieldOnCost.toFixed(2)}`;
    document.getElementById("outputTrendedMarket").innerText = `$${trendedMarket.toFixed(2)}`;
    document.getElementById("outputTrendedMarketCap").innerText = `${trendedMarketCap.toFixed(2)}%`;
    document.getElementById("outputTrendedMarketYOC").innerText = `$${trendedMarketYOC.toFixed(2)}`;
}
