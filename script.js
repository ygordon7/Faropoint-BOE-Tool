document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("calculate").addEventListener("click", function() {

        // Retrieve values from the input fields
        let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
        let sf = parseFloat(document.getElementById("sf").value);
        let costToStabilize = parseFloat(document.getElementById("costToStabilize").value);
        let inPlaceRent = parseFloat(document.getElementById("inPlaceRent").value);
        let marketRent = parseFloat(document.getElementById("marketRent").value);
        let investmentHorizon = parseFloat(document.getElementById("investmentHorizon").value);
        let rentGrowth = parseFloat(document.getElementById("rentGrowth").value) / 100;

        // Calculate metrics
        let pricePerSF = purchasePrice / sf;
        let totalCostPerSF = pricePerSF + costToStabilize;
        let inPlaceNOI = inPlaceRent * sf;
        let marketNOI = marketRent * sf;
        let inPlaceCapRate = inPlaceNOI / purchasePrice;
        let marketCapRate = marketNOI / purchasePrice;
        let trendedMarketRent = marketRent * Math.pow((1 + rentGrowth), investmentHorizon);
        let trendedMarketNOI = trendedMarketRent * sf;
        let trendedMarketCapRate = trendedMarketNOI / purchasePrice;
        let yieldOnCost = inPlaceNOI / (totalCostPerSF * sf);
        let trendedYieldOnCost = trendedMarketNOI / (totalCostPerSF * sf);

        // Output the results
        document.getElementById("pricePerSF").textContent = "$" + pricePerSF.toFixed(2);
        document.getElementById("totalCostPerSF").textContent = "$" + totalCostPerSF.toFixed(2);
        document.getElementById("inPlaceCapRate").textContent = (inPlaceCapRate * 100).toFixed(2) + "%";
        document.getElementById("marketCapRate").textContent = (marketCapRate * 100).toFixed(2) + "%";
        document.getElementById("trendedMarketRent").textContent = "$" + trendedMarketRent.toFixed(2);
        document.getElementById("trendedMarketCapRate").textContent = (trendedMarketCapRate * 100).toFixed(2) + "%";
        document.getElementById("yieldOnCost").textContent = (yieldOnCost * 100).toFixed(2) + "%";
        document.getElementById("trendedYieldOnCost").textContent = (trendedYieldOnCost * 100).toFixed(2) + "%";

    });

});


