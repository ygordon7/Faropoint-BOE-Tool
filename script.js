function formatCurrency(inputElement) {
    let value = parseFloat(inputElement.value.replace(/[\$,]/g, ''));
    if (!isNaN(value)) {
        inputElement.value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    } else {
        inputElement.value = "";
    }
}

function formatPercentage(inputElement) {
    let value = parseFloat(inputElement.value.replace('%', ''));
    if (!isNaN(value)) {
        inputElement.value = `${value.toFixed(1)}%`;
    } else {
        inputElement.value = "";
    }
}

function formatYears(inputElement) {
    let value = parseInt(inputElement.value.replace(' Years', ''));
    if (!isNaN(value)) {
        inputElement.value = `${value} Years`;
    } else {
        inputElement.value = "";
    }
}

function calculateOutputs() {
    const RSF = parseFloat(document.getElementById('RSF').value);
    const price = parseFloat(document.getElementById('price').value.replace(/[\$,]/g, ''));
    const inPlaceNOI = parseFloat(document.getElementById('inPlaceNOI').value.replace(/[\$,]/g, ''));
    const marketRent = parseFloat(document.getElementById('marketRent').value.replace(/[\$,]/g, ''));
    const costToStabilize = parseFloat(document.getElementById('costToStabilize').value.replace(/[\$,]/g, ''));
    const growthCAGR = parseFloat(document.getElementById('growthCAGR').value.replace('%', '')) / 100;
    const investmentHorizon = parseInt(document.getElementById('investmentHorizon').value.replace(' Years', ''));

    const pricePSF = price / RSF;
    const totalCostPSF = pricePSF + costToStabilize;
    const inPlaceCapRate = (inPlaceNOI / pricePSF) * 100;
    const marketCapRate = (marketRent / RSF) * 100;
    const marketYOC = marketRent / totalCostPSF;
    const trendedMarket = marketRent * Math.pow((1 + growthCAGR), investmentHorizon);
    const trendedMarketCap = trendedMarket / pricePSF;
    const trendedMarketYOC = trendedMarket / totalCostPSF;

    const outputDiv = document.querySelector('.output-section');
    outputDiv.innerHTML = `
        RSF: ${RSF.toLocaleString()}
        <br>
        Price: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}
        <br>
        Price PSF: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pricePSF)}
        <br>
        Cost to Stabilize: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(costToStabilize)}
        <br>
        Total Cost PSF: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalCostPSF)}
        <br>
        In Place NOI PSF: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inPlaceNOI)}
        <br>
        In Place Cap Rate: ${inPlaceCapRate.toFixed(2)}%
        <br>
        Market Rent PSF: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(marketRent)}
        <br>
        Market Cap Rate: ${marketCapRate.toFixed(2)}%
        <br>
        Market Yield on Cost: ${marketYOC.toFixed(2)}
        <br>
        Trended Market: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(trendedMarket)}
        <br>
        Trended Market Cap: ${trendedMarketCap.toFixed(2)}
        <br>
        Trended Market YOC: ${trendedMarketYOC.toFixed(2)}
    `;
}

document.getElementById('runBtn').addEventListener('click', calculateOutputs);
