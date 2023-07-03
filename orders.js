$(document).ready(function() {
    // Function to display the modal
    function displayModal(modalId) {
        var modal = $('#' + modalId);
        modal.css('display', 'block');
    }

    // Function to close the modal
    function closeModal(modalId) {
        var modal = $('#' + modalId);
        modal.css('display', 'none');
    }
    
    // Function to hide cancel and track order buttons
    function hideButtons(orderproId, orderId) {
        $('.cancel-order-btn[data-orderproid="' + orderproId + '"][data-orderid="' + orderId + '"]').hide(); 
        $('.track-order-btn[data-orderproid="' + orderproId + '"][data-orderid="' + orderId + '"]').hide();
    }

    // Event listener for cancel order button click
    $('.cancel-order-btn').click(function() {
        var orderproId = $(this).data('orderproid');
        var orderId = $(this).data('orderid');
        var cancelButton = $(this);
        
        $.ajax({
            url: 'cancelOrder',
            type: 'POST',
            data: { 
                orderproId: orderproId,
                orderId: orderId	
            },
            success: function(response) {
                displayModal('cancelOrderModal');
                hideButtons(orderproId, orderId);
            },
            error: function(xhr, status, error) {
                // Handle any errors or display error message
            }
        });
    });

    // Event listener for track order button click
    $('.track-order-btn').click(function() {
        var orderproId = $(this).data('orderproid');
        var orderId = $(this).data('orderid');
        
        $.ajax({
            url: 'trackOrder',
            type: 'GET',
            data: { 
                orderproId: orderproId,
                orderId: orderId
            },
            success: function(response) {
                updateShipmentStatus(response);
                displayModal('trackOrderModal');
            },
            error: function(xhr, status, error) {
             
            }
        });
    });
    
      // Event listener for view bill button click
    $('.view-bill-btn').click(function() {
		console.log("in ajax");
        var orderId = $(this).data('orderid');
        var productId = $(this).data('productid');
        $.ajax({
            url: 'getBill',
            type: 'GET',
            data: { orderId: orderId,
                  productId: productId
             },
            success: function(response) {
           
                displayBillPopup(response);
            },
            error: function(xhr, status, error) {
			       console.log();
              
            }
        });
    });

    // Function to update shipment status dots
    function updateShipmentStatus(shipmentStatus) {
        $('.dot').css('background-color', 'gray');

        var statusIndex;
        switch (shipmentStatus) {
            case 'Order_Placed':
                statusIndex = 0;
                break;
            case 'Order Processed':
                statusIndex = 1;
                break;
            case 'dispatched':
                statusIndex = 2;
                break;
            case 'Out for Delivery':
                statusIndex = 3;
                break;
            case 'delivered':
                statusIndex = 4;
                break;
            default:
                statusIndex = -1;
                break;
        }

        if (statusIndex >= 0) {
            $('.dot').eq(statusIndex).css('background-color', 'green');
        }
    }
    
        // Function to display the bill details in a popup
    function displayBillPopup(billDetails) {
        // Update the DOM with the bill details and display the popup
        // You can use a modal library like Bootstrap Modal to create the popup
        // Example code to display the bill details in a modal
        var modal = $('#billModal');
        modal.find('.bill-no').text(billDetails.billNo);
        modal.find('.order-date').text(billDetails.orderDate);
        modal.find('.payment-mode').text(billDetails.paymentMode);
        modal.find('.shipping-address').text(billDetails.shippingAddress);
        modal.find('.shipment-date').text(billDetails.shipmentDate);
        modal.find('.quantity').text(billDetails.quantity);
        modal.find('.gst').text(billDetails.gst);
        modal.find('.price').text(billDetails.price);

        displayModal('billModal');
    }

    // Close the modal when the close button is clicked
    $('.close').click(function() {
        var modalId = $(this).closest('.modal').attr('id');
        closeModal(modalId);
    });
});
