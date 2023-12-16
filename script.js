let balance = 0;

        function updateBalance() {
            document.getElementById("balance").textContent = "Balance: $" + balance;
        }

        function showMessage(message) {
            document.getElementById("message").textContent = message;
        }

        function deposit() {
            let depositAmount = parseFloat(document.getElementById("amount").value);
            if (!isNaN(depositAmount) && depositAmount > 0) {
                balance += depositAmount;
                updateBalance();
                showMessage("Deposit successful!");
            } else {
                alert("Please enter a valid deposit amount.");
            }
        }

        function withdraw() {
            let withdrawAmount = parseFloat(document.getElementById("amount").value);
            if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                updateBalance();
                showMessage("Withdrawal successful!");
            } else {
                alert("Please enter a valid withdrawal amount.");
            }
        }