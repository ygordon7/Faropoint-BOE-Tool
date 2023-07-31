document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", function() {
        let rsf = parseFloat(document.getElementById("rsf").value.replace(/,/g, ''));
        let price = parseFloat(document.getElementById("price").value.replace(/[^0-9.]/g, ''));
        let inPlaceNOI = parseFloat(document.getElementById("inPlaceNOI").value.replace(/[^0-9.]/g, ''));
        let marketRent = parseFloat(document.getElementById("marketRent").value.replace(/[^0-9.]/g, ''));
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value.replace(/[^0-9.]/g, ''));
        let marketRentGrowth = parseFloat(document.getElementById("marketRentGrowth").value) / 100;
        let propertyAppreciation = parseFloat(document.getElementById("propertyAppreciation").value) / 100;
        let investmentHorizon = parseInt(document.getElementById("investmentHorizon").value);

        let pricePerSF = price / rsf;
        let totalCostPerSF = (price + costToStabilize) / rsf;
        let inPlaceCapRate = (inPlaceNOI / pricePerSF) * 100;
        let marketCapRate = (marketRent / pricePerSF) * 100;
        let marketYieldOnCost = (marketRent / totalCostPerSF) * 100;
        let trendedMarketRent = marketRent;

        for (let i = 0; i < investmentHorizon; i++) {
            trendedMarketRent += trendedMarketRent * marketRentGrowth;
        }

        let trendedMarket = trendedMarketRent * rsf;
        let trendedMarketCap = trendedMarket / price;
        let trendedMarketYOC = trendedMarket / (totalCostPerSF * rsf) * 100;

        document.getElementById("summaryRSF").textContent = rsf.toLocaleString();
        document.getElementById("summaryPrice").textContent = '$' + price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("pricePerSF").textContent = '$' + pricePerSF.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("costToStabilizeOutput").textContent = '$' + costToStabilize.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("totalCostPerSF").textContent = '$' + totalCostPerSF.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("inPlaceNOIOutput").textContent = '$' + inPlaceNOI.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("inPlaceCapRate").textContent = inPlaceCapRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
        document.getElementById("marketRentOutput").textContent = '$' + marketRent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("marketCapRate").textContent = marketCapRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
        document.getElementById("marketYieldOnCost").textContent = '$' + marketYieldOnCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("trendedMarket").textContent = '$' + trendedMarket.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("trendedMarketCap").textContent = trendedMarketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("trendedMarketYOC").textContent = trendedMarketYOC.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";

        document.getElementById("outputSection").style.display = "block";
    });
});

function formatNumberInput(input) {
    let value = input.value.replace(/,/g, '');
    input.value = parseFloat(value).toLocaleString();
}

function formatCurrencyInput(input) {
    let value = input.value.replace(/[^0-9.]/g, '');
    input.value = '$' + parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
