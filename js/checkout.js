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

document.addEventListener('DOMContentLoaded', () => {
    const makePaymentBtn = document.getElementById('make-payment-btn');

    if (makePaymentBtn) {
        makePaymentBtn.addEventListener('click', () => {
            // Create modal content
            const modalContent = `
                <div class="modal fade" id="paymentConfirmationModal" tabindex="-1" aria-labelledby="paymentConfirmationModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="paymentConfirmationModalLabel">Payment Confirmation</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Thanks for making the payment! Enjoy your day.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" id="continue-shopping-btn">Continue Shopping</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="exit-btn">Exit</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Append modal to body
            document.body.insertAdjacentHTML('beforeend', modalContent);

            // Show modal
            const paymentModal = new bootstrap.Modal(document.getElementById('paymentConfirmationModal'));
            paymentModal.show();

            // Handle continue shopping button click
            const continueShoppingBtn = document.getElementById('continue-shopping-btn');
            if (continueShoppingBtn) {
                continueShoppingBtn.addEventListener('click', () => {
                    window.location.href = 'productList.html';
                    paymentModal.hide();
                });
            }


            // Handle exit button click
            const exitBtn = document.getElementById('exit-btn');
            if (exitBtn) {
                exitBtn.addEventListener('click', () => {
                    // Redirect to homepage (index.html)
                    window.location.href = 'login.html';
                });
            }
        });
    }
});
