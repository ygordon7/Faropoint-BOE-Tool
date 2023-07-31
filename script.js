document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", function() {
        let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
        let squareFeet = parseFloat(document.getElementById("squareFeet").value);
        let inPlaceRent = parseFloat(document.getElementById("inPlaceRent").value);
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value);
        let marketRent = parseFloat(document.getElementById("marketRent").value);
        let investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value);
        let rentGrowth = parseFloat(document.getElementById("rentGrowth").value) / 100;

        let pricePerSF = purchasePrice / squareFeet;
        let inPlaceNOI = inPlaceRent * squareFeet;
        let inPlaceCapRate = (inPlaceNOI / purchasePrice) * 100;
        let marketNOI = marketRent * squareFeet;
        let marketCapRate = (marketNOI / purchasePrice) * 100;

        let trendedMarketRent = marketRent;

        for (let i = 0; i < investmentHorizon; i++) {
            trendedMarketRent += trendedMarketRent * rentGrowth;
        }

        let totalCostPerSF = pricePerSF + costToStabilize;
        let trendedMarketCapRate = (trendedMarketRent * squareFeet / purchasePrice) * 100;
        let trendedMarketYOC = (trendedMarketRent * squareFeet / (totalCostPerSF * squareFeet)) * 100;

        document.getElementById("pricePerSF").textContent = pricePerSF.toFixed(2);
        document.getElementById("inPlaceNOI").textContent = formatCurrency(inPlaceNOI);
        document.getElementById("inPlaceCapRate").textContent = inPlaceCapRate.toFixed(2) + "%";
        document.getElementById("marketNOI").textContent = formatCurrency(marketNOI);
        document.getElementById("marketCapRate").textContent = marketCapRate.toFixed(2) + "%";
        document.getElementById("trendedMarketRent").textContent = formatCurrency(trendedMarketRent);
        document.getElementById("totalCostPerSF").textContent = totalCostPerSF.toFixed(2);
        document.getElementById("trendedMarketCapRate").textContent = trendedMarketCapRate.toFixed(2) + "%";
        document.getElementById("trendedMarketYOC").textContent = trendedMarketYOC.toFixed(2) + "%";

        document.getElementById("summaryPurchasePrice").textContent = formatCurrency(purchasePrice);
        document.getElementById("summarySquareFeet").textContent = squareFeet.toLocaleString();
        document.getElementById("outputSection").style.display = "block";
    });
});

function formatCurrency(value) {
    return "$" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
