// script.js
document.addEventListener("DOMContentLoaded", function() {

    // Button event listener
    document.getElementById("calculate").addEventListener("click", function() {

        // Getting values from inputs
        let purchasePrice = parseFloat(document.getElementById("purchasePrice").value.replace(/,/g, ''));
        let squareFeet = parseFloat(document.getElementById("squareFeet").value.replace(/,/g, ''));
        let inPlaceRent = parseFloat(document.getElementById("inPlaceRent").value);
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value);
        let marketRent = parseFloat(document.getElementById("marketRent").value);
        let investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value);
        let rentGrowth = parseFloat(document.getElementById("rentGrowth").value) / 100;
        
        // Calculations
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
        
        // Outputting results to HTML
        document.getElementById("summaryPurchasePrice").textContent = '$' + purchasePrice.toLocaleString();
        document.getElementById("summarySquareFeet").textContent = squareFeet.toLocaleString();
        document.getElementById("pricePerSF").textContent = '$' + pricePerSF.toFixed(2);
        document.getElementById("inPlaceNOI").textContent = '$' + inPlaceNOI.toFixed(2);
        document.getElementById("inPlaceCapRate").textContent = inPlaceCapRate.toFixed(2) + "%";
        document.getElementById("marketNOI").textContent = '$' + marketNOI.toFixed(2);
        document.getElementById("marketCapRate").textContent = marketCapRate.toFixed(2) + "%";
        document.getElementById("trendedMarketRent").textContent = '$' + trendedMarketRent.toFixed(2);
        document.getElementById("totalCostPerSF").textContent = '$' + totalCostPerSF.toFixed(2);
        document.getElementById("trendedMarketCapRate").textContent = trendedMarketCapRate.toFixed(2) + "%";
        document.getElementById("trendedMarketYOC").textContent = trendedMarketYOC.toFixed(2) + "%";

        // Show the output section
        document.getElementById("outputSection").style.display = "block";

    });
});
