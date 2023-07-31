<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Real Estate Calculator</h1>

        <div class="input-section">
            <label for="rsf">RSF:</label>
            <input type="text" id="rsf" oninput="formatNumberInput(this)" placeholder="RSF">
            <label for="price">Price:</label>
            <input type="text" id="price" oninput="formatCurrencyInput(this)" placeholder="Price">
            <label for="inPlaceNOI">In Place NOI PSF:</label>
            <input type="text" id="inPlaceNOI" oninput="formatCurrencyInput(this)" placeholder="In Place NOI PSF">
            <label for="marketRent">Market Rent PSF:</label>
            <input type="text" id="marketRent" oninput="formatCurrencyInput(this)" placeholder="Market Rent PSF">
            <label for="costToStabilize">Cost to Stabilize:</label>
            <input type="text" id="costToStabilize" oninput="formatCurrencyInput(this)" placeholder="Cost to Stabilize">
            <label for="marketRentGrowth">Market Rent Growth CAGR:</label>
            <input type="text" id="marketRentGrowth" oninput="formatNumberInput(this)" placeholder="Market Rent Growth CAGR">
            <label for="propertyAppreciation">Property Appreciation:</label>
            <input type="text" id="propertyAppreciation" oninput="formatNumberInput(this)" placeholder="Property Appreciation">
            <label for="investmentHorizon">Investment Horizon:</label>
            <input type="text" id="investmentHorizon" oninput="formatNumberInput(this)" placeholder="Investment Horizon">
            <button id="calculate">Run</button>
        </div>

        <div class="output-section" id="outputSection">
            <h2>Summary</h2>
            <table>
                <tr>
                    <td>RSF:</td>
                    <td id="summaryRSF"></td>
                </tr>
                <tr>
                    <td>Price:</td>
                    <td id="summaryPrice"></td>
                </tr>
                <tr>
                    <td>Price PSF:</td>
                    <td id="pricePerSF"></td>
                </tr>
                <tr>
                    <td>Cost to Stabilize:</td>
                    <td id="costToStabilizeOutput"></td>
                </tr>
                <tr>
                    <td>Total Cost PSF:</td>
                    <td id="totalCostPerSF"></td>
                </tr>
                <tr>
                    <td>In Place NOI PSF:</td>
                    <td id="inPlaceNOIOutput"></td>
                </tr>
                <tr>
                    <td>In Place Cap Rate:</td>
                    <td id="inPlaceCapRate"></td>
                </tr>
                <tr>
                    <td>Market Rent PSF:</td>
                    <td id="marketRentOutput"></td>
                </tr>
                <tr>
                    <td>Market Cap Rate:</td>
                    <td id="marketCapRate"></td>
                </tr>
                <tr>
                    <td>Market Yield on Cost:</td>
                    <td id="marketYieldOnCost"></td>
                </tr>
                <tr>
                    <td>Trended Market:</td>
                    <td id="trendedMarket"></td>
                </tr>
                <tr>
                    <td>Trended Market Cap:</td>
                    <td id="trendedMarketCap"></td>
                </tr>
                <tr>
                    <td>Trended Market YOC:</td>
                    <td id="trendedMarketYOC"></td>
                </tr>
            </table>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
