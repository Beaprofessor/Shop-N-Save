document.addEventListener("DOMContentLoaded", function() {
    // Function to handle payment option selection
    function togglePaymentOption(paymentType) {
        var selectedSection = document.getElementById(paymentType + "-qrcode");
        var isVisible = selectedSection.classList.contains("active");

        if (!isVisible) {
            // Hide all QR code sections first
            var allQrCodeSections = document.querySelectorAll(".qrcode");
            allQrCodeSections.forEach(function(section) {
                section.classList.remove("active");
            });

            // Show selected QR code section
            selectedSection.classList.add("active");
        } else {
            // Hide selected QR code section
            selectedSection.classList.remove("active");
        }
    }

    // Event listeners for each payment option
    document.getElementById("crypto-payment").addEventListener("click", function() {
        togglePaymentOption("crypto");
    });

    document.getElementById("phonepe-payment").addEventListener("click", function() {
        togglePaymentOption("phonepe");
    });

    document.getElementById("paytm-payment").addEventListener("click", function() {
        togglePaymentOption("paytm");
    });
});
