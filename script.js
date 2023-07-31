document.addEventListener("DOMContentLoaded", function() {
    // Button event listener
    document.getElementById("calculate").addEventListener("click", function() {
        // Getting values from inputs
        let rsf = parseFloat(document.getElementById("rsf").value.replace(/,/g, ''));
        let price = parseFloat(document.getElementById("price").value.replace(/[^0-9.]/g, ''));
        let inPlaceNOI = parseFloat(document.getElementById("inPlaceNOI").value.replace(/[^0-9.]/g, ''));
        let marketRent = parseFloat(document.getElementById("marketRent").value.replace(/[^0-9.]/g, ''));
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value.replace(/[^0-9.]/g, ''));
        let marketRentGrowth = parseFloat(document.getElementById("marketRentGrowth").value.replace(/[^0-9.]/g, '')) / 100;
        let propertyAppreciation = parseFloat(document.getElementById("propertyAppreciation").value.replace(/[^0-9.]/g, '')) / 100;
        let investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value.replace(/[^0-9.]/g, ''));

        // Calculations
        let pricePerSF = price / rsf;
        let totalCostPerSF = pricePerSF + costToStabilize;
        let inPlaceCapRate = (inPlaceNOI / pricePerSF) * 100;
        let marketCapRate = (marketRent / rsf) * 100;
        let marketYieldOnCost = (marketRent / totalCostPerSF) * 100;

        let trendedMarketRent = marketRent;
        for (let i = 0; i < investmentHorizon; i++) {
            trendedMarketRent += trendedMarketRent * marketRentGrowth;
        }
        let trendedMarketCapRate = (trendedMarketRent / pricePerSF) * 100;
        let trendedMarketYOC = (trendedMarketRent / totalCostPerSF) * 100;

        // Outputting results to HTML
        document.getElementById("summaryRSF").textContent = rsf.toLocaleString();
        document.getElementById("summaryPrice").textContent = '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("pricePerSF").textContent = '$' + pricePerSF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("costToStabilizeOutput").textContent = '$' + costToStabilize.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("totalCostPerSF").textContent = '$' + totalCostPerSF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("inPlaceNOIOutput").textContent = '$' + inPlaceNOI.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("inPlaceCapRate").textContent = inPlaceCapRate.toFixed(2) + "%";
        document.getElementById("marketRentOutput").textContent = '$' + marketRent.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("marketCapRate").textContent = marketCapRate.toFixed(2) + "%";
        document.getElementById("marketYieldOnCost").textContent = '$' + marketYieldOnCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("trendedMarket").textContent = '$' + trendedMarketRent.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("trendedMarketCap").textContent = trendedMarketCapRate.toFixed(2) + "%";
        document.getElementById("trendedMarketYOC").textContent = trendedMarketYOC.toFixed(2) + "%";

        // Show the output section
        document.getElementById("outputSection").style.display = "block";
    });
});

// Format number input with commas
function formatNumberInput(input) {
    let value = input.value.replace(/,/g, '');
    input.value = value.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Format currency input with commas
function formatCurrencyInput(input) {
    let value = input.value.replace(/[^0-9.]/g, '');
    input.value = '$' + value.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
