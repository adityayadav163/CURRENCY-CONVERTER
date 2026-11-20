// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });


// const BASE_URL =
//     "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// // Selecting HTML elements
// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");
// const amount = document.querySelector(".amount input");

// // Check whether required elements exist
// if (!fromCurr || !toCurr || !btn || !msg || !amount) {
//     console.error("Currency Converter: Required HTML elements not found.");
// } else if (typeof countryList === "undefined") {
//     console.error("Currency Converter: countryList is not loaded. Load 01_code.js before 01_app.js.");
// } else {

//     // Populate currency dropdowns
//     for (let select of dropdowns) {

//         // Remove old options to prevent duplicates
//         select.innerHTML = "";

//         for (let currCode in countryList) {

//             let newOption = document.createElement("option");

//             newOption.innerText = currCode;
//             newOption.value = currCode;

//             // Default currencies
//             if (select === fromCurr && currCode === "USD") {
//                 newOption.selected = true;
//             }

//             if (select === toCurr && currCode === "INR") {
//                 newOption.selected = true;
//             }

//             select.append(newOption);
//         }

//         // Update flag and exchange rate when currency changes
//         select.addEventListener("change", (evt) => {
//             updateFlag(evt.target);
//             updateExchangeRate();
//         });
//     }

//     // Function to update country flags
//     const updateFlag = (element) => {

//         let currCode = element.value;
//         let countryCode = countryList[currCode];

//         if (!countryCode) {
//             console.error("Country code not found:", currCode);
//             return;
//         }

//         let newSrc =
//             `https://flagsapi.com/${countryCode}/flat/64.png`;

//         let img = element.parentElement.querySelector("img");

//         if (img) {
//             img.src = newSrc;
//             img.alt = `${currCode} flag`;
//         }
//     };

//     // Function to get exchange rate
//     const updateExchangeRate = async () => {

//         try {

//             // Validate amount
//             let amtVal = Number(amount.value);

//             if (
//                 amount.value.trim() === "" ||
//                 !Number.isFinite(amtVal) ||
//                 amtVal < 0
//             ) {
//                 amtVal = 1;
//                 amount.value = "1";
//             }

//             let fromCode = fromCurr.value.toLowerCase();
//             let toCode = toCurr.value.toLowerCase();

//             // Same currency conversion
//             if (fromCode === toCode) {

//                 msg.innerText =
//                     `${amtVal} ${fromCurr.value} = ${amtVal.toFixed(2)} ${toCurr.value}`;

//                 return;
//             }

//             // Construct API URL
//             const URL =
//                 `${BASE_URL}/${fromCode}/${toCode}.json`;

//             // Show loading message
//             msg.innerText = "Getting exchange rate...";

//             // Fetch exchange rate
//             let response = await fetch(URL);

//             if (!response.ok) {
//                 throw new Error("Exchange rate API request failed.");
//             }

//             let data = await response.json();

//             // Get exchange rate
//             let rate = data[toCode];

//             if (typeof rate !== "number" || !Number.isFinite(rate)) {
//                 throw new Error("Exchange rate not found.");
//             }

//             // Calculate final amount
//             let finalAmount = amtVal * rate;

//             // Display result
//             msg.innerText =
//                 `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

//         } catch (error) {

//             console.error("Currency Converter Error:", error);

//             msg.innerText =
//                 "Unable to get exchange rate. Please check your internet connection and try again.";
//         }
//     };

//     // Update flags when page loads
//     updateFlag(fromCurr);
//     updateFlag(toCurr);

//     // Get exchange rate when page loads
//     window.addEventListener("load", () => {
//         updateExchangeRate();
//     });

//     // Get exchange rate when button is clicked
//     btn.addEventListener("click", (evt) => {

//         evt.preventDefault();

//         updateExchangeRate();
//     });

//     // Automatically update when amount changes
//     amount.addEventListener("input", () => {
//         updateExchangeRate();
//     });

// }


const API_URLS = [
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies",
    "https://latest.currency-api.pages.dev/v1/currencies"
];

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const amount = document.querySelector(".amount input");

if (
    !fromCurr ||
    !toCurr ||
    !btn ||
    !msg ||
    !amount ||
    typeof countryList === "undefined"
) {
    console.error("Currency Converter: Check HTML elements and 01_code.js loading order.");

} else {

    for (let select of dropdowns) {

        select.innerHTML = "";

        for (let currCode in countryList) {

            let newOption = document.createElement("option");

            newOption.innerText = currCode;
            newOption.value = currCode;

            if (select === fromCurr && currCode === "USD") {
                newOption.selected = true;
            }

            if (select === toCurr && currCode === "INR") {
                newOption.selected = true;
            }

            select.append(newOption);
        }

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
            updateExchangeRate();
        });
    }

    

    const updateFlag = (element) => {

        let currCode = element.value;
        let countryCode = countryList[currCode];

        let img = element.parentElement.querySelector("img");

        if (countryCode && img) {

            img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
            img.alt = `${currCode} flag`;
        }
    };


    const getExchangeRate = async (fromCode, toCode) => {

        let lastError;

        for (let api of API_URLS) {

            try {

                const URL = `${api}/${fromCode}.json`;

                console.log("Trying API:", URL);

                let response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                let data = await response.json();

                let rate = data[fromCode]?.[toCode];

                if (
                    typeof rate !== "number" ||
                    !Number.isFinite(rate)
                ) {
                    throw new Error("Exchange rate not found.");
                }

                console.log("Exchange rate received:", rate);

                return rate;

            } catch (error) {

                lastError = error;

                console.warn("API failed. Trying backup server...", error);
            }
        }

        throw lastError || new Error("All exchange rate servers failed.");
    };


    let requestNumber = 0;

    const updateExchangeRate = async () => {

        const currentRequest = ++requestNumber;

        try {

            let amtVal = Number(amount.value);

            if (
                amount.value.trim() === "" ||
                !Number.isFinite(amtVal) ||
                amtVal <= 0
            ) {

                amtVal = 1;
                amount.value = "1";
            }

            let fromCode = fromCurr.value.toLowerCase();
            let toCode = toCurr.value.toLowerCase();

            
            if (fromCode === toCode) {

                msg.innerText =
                    `${amtVal} ${fromCurr.value} = ${amtVal.toFixed(2)} ${toCurr.value}`;

                return;
            }

            msg.innerText = "Getting exchange rate...";

            
            let rate = await getExchangeRate(fromCode, toCode);

            
            if (currentRequest !== requestNumber) return;

            
            let finalAmount = amtVal * rate;

        
            msg.innerText =
                `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

        } catch (error) {

            if (currentRequest !== requestNumber) return;

            console.error("Currency Converter Error:", error);

            msg.innerText =
                "Unable to get exchange rate. Please try again.";
        }
    };

    updateFlag(fromCurr);
    updateFlag(toCurr);


    btn.addEventListener("click", (evt) => {

        evt.preventDefault();

        updateExchangeRate();
    });

    amount.addEventListener("change", () => {
        updateExchangeRate();
    });



    window.addEventListener("load", () => {

        updateExchangeRate();

    });

}
