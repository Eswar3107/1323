<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Invoice</title>
    <!-- Add your CSS stylesheets and JavaScript files here -->
</head>
<body>
    <h2>Invoice</h2>
    <table>
        <tr>
            <th>Order ID:</th>
            <td>${invoice.orderId}</td>
        </tr>
        <tr>
            <th>Bill No:</th>
            <td>${invoice.billNo}</td>
        </tr>
        <tr>
            <th>Order Date:</th>
            <td>${invoice.orderDate}</td>
        </tr>
        <tr>
            <th>Payment Mode:</th>
            <td>${invoice.paymentMode}</td>
        </tr>
        <tr>
            <th>Shipping Address:</th>
            <td>${invoice.shippingAddress}</td>
        </tr>
        <tr>
            <th>Shipment Date:</th>
            <td>${invoice.shipmentDate}</td>
        </tr>
        <tr>
            <th>Quantity:</th>
            <td>${invoice.quantity}</td>
        </tr>
        <tr>
            <th>GST:</th>
            <td>${invoice.gst}</td>
        </tr>
        <tr>
            <th>Price:</th>
            <td>${invoice.price}</td>
        </tr>
    </table>
</body>
</html>
