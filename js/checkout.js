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
// Function to show enlarged QR code image in modal
function showLargeQRImage(element) {
    var modal = document.getElementById("qrModal");
    var modalImg = document.getElementById("qrModalImg");

    // Set the image source in the modal
    modalImg.src = element.src;

    // Display the modal
    modal.style.display = "block";

    // Close modal when clicking on the close button
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}


// Event listener for make payment button
document.addEventListener('DOMContentLoaded', function() {
    const makePaymentBtn = document.getElementById('make-payment-btn');

    if (makePaymentBtn) {
        makePaymentBtn.addEventListener('click', function() {
            // Show payment confirmation modal
            const paymentModal = new bootstrap.Modal(document.getElementById('paymentConfirmationModal'));
            paymentModal.show();
        });
    }
});

// Handle continue shopping button click
document.addEventListener('DOMContentLoaded', function() {
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');

    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function() {
            // Redirect to shopping page or perform desired action
            window.location.href = 'productList.html';
        });
    }
});

// Handle exit button click
document.addEventListener('DOMContentLoaded', function() {
    const exitBtn = document.getElementById('exit-btn');

    if (exitBtn) {
        exitBtn.addEventListener('click', function() {
            // Redirect to home page or perform desired action
            window.location.href = 'login.html';
        });
    }
});
