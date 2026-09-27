function calculateOilChange() {

    const customerName =
        document.getElementById("customerName").value.trim();

    const customerPhone =
        document.getElementById("customerPhone").value.trim();

    const oilDate =
        document.getElementById("oilDate").value;

    const interval =
        parseInt(
            document.getElementById("oilInterval").value
        );

    const result =
        document.getElementById("reminderResult");


    if (!oilDate) {

        result.style.display = "block";

        result.innerHTML =
            "⚠️ Please select the oil change date.";

        return;
    }


    const lastDate =
        new Date(oilDate + "T00:00:00");


    const nextDate =
        new Date(lastDate);


    nextDate.setMonth(
        nextDate.getMonth() + interval
    );


    const nextDateText =
        nextDate.toLocaleDateString(
            "en-US",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    result.style.display = "block";


    result.innerHTML = `
        <strong>✅ Service Saved</strong>

        <br><br>

        Customer:
        <strong>${safeText(customerName || "Customer")}</strong>

        <br>

        Last Oil Change:
        <strong>${formatDate(oilDate)}</strong>

        <br>

        Next Oil Change:
        <strong>${nextDateText}</strong>

        ${
            customerPhone
            ? `<br>📱 WhatsApp: ${safeText(customerPhone)}`
            : ""
        }

        <br><br>

        Your next service date has been calculated.
    `;


    localStorage.setItem(
        "customerName",
        customerName
    );

    localStorage.setItem(
        "customerPhone",
        customerPhone
    );

    localStorage.setItem(
        "oilDate",
        oilDate
    );

    localStorage.setItem(
        "oilInterval",
        interval
    );
}


function formatDate(dateString) {

    const date =
        new Date(dateString + "T00:00:00");


    return date.toLocaleDateString(
        "en-US",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );
}


function safeText(text) {

    const element =
        document.createElement("div");

    element.textContent = text;

    return element.innerHTML;
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const name =
            localStorage.getItem("customerName");

        const phone =
            localStorage.getItem("customerPhone");

        const date =
            localStorage.getItem("oilDate");

        const interval =
            localStorage.getItem("oilInterval");


        if (name) {

            document.getElementById(
                "customerName"
            ).value = name;

        }


        if (phone) {

            document.getElementById(
                "customerPhone"
            ).value = phone;

        }


        if (date) {

            document.getElementById(
                "oilDate"
            ).value = date;

        }


        if (interval) {

            document.getElementById(
                "oilInterval"
            ).value = interval;

        }


        document.getElementById(
            "year"
        ).textContent =
            new Date().getFullYear();

    }
);