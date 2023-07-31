document.addEventListener("DOMContentLoaded", function() {
    // Button event listener
    document.getElementById("calculate").addEventListener("click", function() {
        // Getting values from inputs
        let rsf = parseFloat(document.getElementById("rsf").value.replace(/[^0-9.]/g, ''));
        let price = parseFloat(document.getElementById("price").value.replace(/[^0-9.]/g, ''));
        let inPlaceNOIPSF = parseFloat(document.getElementById("inPlaceNOIPSF").value.replace(/[^0-9.]/g, ''));
        let marketRentPSF = parseFloat(document.getElementById("marketRentPSF").value.replace(/[^0-9.]/g, ''));
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value.replace(/[^0-9.]/g, ''));
        let marketRentGrowth = parseFloat(document.getElementById("marketRentGrowth").value.replace(/[^0-9.]/g, '')) / 100;
        let propertyAppreciation = parseFloat(document.getElementById("propertyAppreciation").value.replace(/[^0-9.]/g, '')) / 100;
        let investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value.replace(/[^0-9.]/g, ''));

        // Calculations
        let pricePerSF = price / rsf;
        let totalCostPerSF = pricePerSF + costToStabilize;
        let inPlaceCapRate = (inPlaceNOIPSF / pricePerSF) * 100;
        let marketCapRate = (marketRentPSF / rsf) * 100;
        let marketYieldOnCost = (marketRentPSF / totalCostPerSF) * 100;

        let trendedMarket = marketRentPSF;
        for (let i = 0; i < investmentHorizon; i++) {
            trendedMarket *= (1 + marketRentGrowth);
        }
        let trendedMarketCap = trendedMarket / pricePerSF;
        let trendedMarketYOC = trendedMarket / totalCostPerSF;

        // Outputting results to HTML
        document.getElementById("summaryRSF").textContent = rsf.toLocaleString();
        document.getElementById("summaryPrice").textContent = '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("pricePerSF").textContent = '$' + pricePerSF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("costToStabilizeOutput").textContent = '$' + costToStabilize.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("totalCostPerSF").textContent = '$' + totalCostPerSF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("inPlaceNOIOutput").textContent = '$' + inPlaceNOIPSF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("inPlaceCapRate").textContent = inPlaceCapRate.toFixed(2) + "%";
        document.getElementById("marketRentOutput").textContent = '$' + marketRentPSF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("marketCapRate").textContent = marketCapRate.toFixed(2) + "%";
        document.getElementById("marketYieldOnCost").textContent = '$' + marketYieldOnCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("trendedMarket").textContent = '$' + trendedMarket.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("trendedMarketCap").textContent = trendedMarketCap.toFixed(2);
        document.getElementById("trendedMarketYOC").textContent = trendedMarketYOC.toFixed(2);

        // Show the output section
        document.getElementById("outputSection").style.display = "block";
    });
});

// Format number input with commas
function formatNumberInput(input) {
    let value = input.value.replace(/[^0-9.]/g, '');
    input.value = parseFloat(value).toLocaleString();
}

// Format currency input with commas
function formatCurrencyInput(input) {
    let value = input.value.replace(/[^0-9.]/g, '');
    input.value = '$' + parseFloat(value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
