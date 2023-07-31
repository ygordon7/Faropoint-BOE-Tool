document.addEventListener("DOMContentLoaded", function() {
    // Button event listener
    document.getElementById("calculate").addEventListener("click", function() {
        // Getting values from inputs
        let purchasePrice = parseFloat(document.getElementById("purchasePrice").value.replace(/[^0-9.]/g, ''));
        let squareFeet = parseFloat(document.getElementById("squareFeet").value.replace(/,/g, ''));
        let inPlaceRent = parseFloat(document.getElementById("inPlaceRent").value.replace(/[^0-9.]/g, ''));
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value.replace(/[^0-9.]/g, ''));
        let marketRent = parseFloat(document.getElementById("marketRent").value.replace(/[^0-9.]/g, ''));
        let investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value);
        let rentGrowth = parseFloat(document.getElementById("rentGrowth").value) / 100;

        // Calculations
        let pricePerSF = purchasePrice / squareFeet;
        let inPlaceNOI = inPlaceRent;
        let inPlaceCapRate = (inPlaceNOI / purchasePrice) * 100;
        let marketNOI = marketRent;
        let marketCapRate = (marketNOI / purchasePrice) * 100;
        let trendedMarketRent = marketRent;

        for (let i = 0; i < investmentHorizon; i++) {
            trendedMarketRent += trendedMarketRent * rentGrowth;
        }

        let totalCostPerSF = (purchasePrice + costToStabilize) / squareFeet;
        let trendedMarketCapRate = (trendedMarketRent / totalCostPerSF) * 100;
        let trendedMarketYOC = (trendedMarketRent / totalCostPerSF) * 100;

        // Outputting results to HTML
        document.getElementById("summaryPurchasePrice").textContent = '$' + purchasePrice.toLocaleString();
        document.getElementById("summarySquareFeet").textContent = squareFeet.toLocaleString();
        document.getElementById("pricePerSF").textContent = '$' + pricePerSF.toFixed(2);
        document.getElementById("costToStabilizeOutput").textContent = '$' + costToStabilize.toFixed(2);
        document.getElementById("totalCostPerSF").textContent = '$' + totalCostPerSF.toFixed(2);
        document.getElementById("inPlaceNOI").textContent = '$' + inPlaceNOI.toFixed(2);
        document.getElementById("inPlaceCapRate").textContent = inPlaceCapRate.toFixed(2) + "%";
        document.getElementById("marketNOI").textContent = '$' + marketNOI.toFixed(2);
        document.getElementById("marketCapRate").textContent = marketCapRate.toFixed(2) + "%";
        document.getElementById("marketYOC").textContent = trendedMarketYOC.toFixed(2) + "%";
        document.getElementById("trendedMarketRent").textContent = '$' + trendedMarketRent.toFixed(2);
        document.getElementById("trendedMarketCapRate").textContent = trendedMarketCapRate.toFixed(2) + "%";
        document.getElementById("trendedMarketYOC").textContent = trendedMarketYOC.toFixed(2) + "%";

        // Show the output section
        document.getElementById("outputSection").style.display = "block";
    });
});

// Format number input with commas
function formatNumberInput(input) {
    let value = input.value.replace(/,/g, '');
    input.value = parseFloat(value).toLocaleString();
}

// Format currency input with commas
function formatCurrencyInput(input) {
    let value = input.value.replace(/[^0-9.]/g, '');
    input.value = '$' + parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
