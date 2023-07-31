function formatCurrency(inputElement) {
    let value = parseFloat(inputElement.value);
    if (!isNaN(value)) {
        inputElement.value = `$${value.toFixed(2)}`;
    } else {
        inputElement.value = "";
    }
}

function formatPercentage(inputElement) {
    let value = parseFloat(inputElement.value);
    if (!isNaN(value)) {
        inputElement.value = `${value.toFixed(1)}%`;
    } else {
        inputElement.value = "";
    }
}

function formatYears(inputElement) {
    let value = parseInt(inputElement.value, 10);
    if (!isNaN(value)) {
        inputElement.value = `${value} Years`;
    } else {
        inputElement.value = "";
    }
}

function calculateOutputs() {
    // Grab input values
    const rsf = parseFloat(document.getElementById("rsf").value);
    const price = parseFloat(document.getElementById("price").value);
    const inPlaceNOI = parseFloat(document.getElementById("inPlaceNOI").value.replace('$', ''));
    const marketRent = parseFloat(document.getElementById("marketRent").value.replace('$', ''));
    const costToStabilize = parseFloat(document.getElementById("costToStabilize").value.replace('$', ''));
    const growthCAGR = parseFloat(document.getElementById("growthCAGR").value.replace('%', '')) / 100;
    const investmentHorizon = parseInt(document.getElementById("investmentHorizon").value);

    // Perform calculations
    const pricePSF = price / rsf;
    const totalCostPSF = pricePSF + costToStabilize;
    const inPlaceCapRate = (inPlaceNOI / pricePSF) * 100;
    const marketCapRate = (marketRent / pricePSF) * 100;
    const marketYOC = marketRent / totalCostPSF;
    const trendedMarket = marketRent * Math.pow((1 + growthCAGR), investmentHorizon);
    const trendedMarketCap = trendedMarket / pricePSF;
    const trendedMarketYOC = trendedMarket / totalCostPSF;

    // Display results in output fields
    document.getElementById("outputRSF").textContent = `${rsf.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
    document.getElementById("outputPrice").textContent = `$${price.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
    document.getElementById("outputPricePSF").textContent = `$${pricePSF.toFixed(2)}`;
    document.getElementById("outputCostToStabilize").textContent = `$${costToStabilize.toFixed(2)}`;
    document.getElementById("outputTotalCostPSF").textContent = `$${totalCostPSF.toFixed(2)}`;
    document.getElementById("outputInPlaceNOIPSF").textContent = `$${inPlaceNOI.toFixed(2)}`;
    document.getElementById("outputInPlaceCapRate").textContent = `${inPlaceCapRate.toFixed(2)}%`;
    document.getElementById("outputMarketRentPSF").textContent = `$${marketRent.toFixed(2)}`;
    document.getElementById("outputMarketCapRate").textContent = `${marketCapRate.toFixed(2)}%`;
    document.getElementById("outputMarketYOC").textContent = `$${marketYOC.toFixed(2)}`;
    document.getElementById("outputTrendedMarket").textContent = `$${trendedMarket.toFixed(2)}`;
    document.getElementById("outputTrendedMarketCap").textContent = `${trendedMarketCap.toFixed(2)}%`;
    document.getElementById("outputTrendedMarketYOC").textContent = `$${trendedMarketYOC.toFixed(2)}`;
}
