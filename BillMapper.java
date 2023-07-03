package eStoreProduct.model;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BillMapper implements RowMapper<Bill> {

    @Override
    public Bill mapRow(ResultSet rs, int rowNum) throws SQLException {
        Bill bill = new Bill();
        bill.setOrderId(rs.getLong("ordr_id"));
        bill.setBillNo(rs.getString("ordr_billno"));
        bill.setOrderDate(rs.getDate("ordr_odate").toLocalDate());
        bill.setPaymentMode(rs.getString("ordr_paymode"));
        bill.setShippingAddress(rs.getString("ordr_saddress"));
        bill.setShipmentDate(rs.getDate("ordr_shipment_date").toLocalDate());
        bill.setQuantity(rs.getInt("orpr_qty"));
        bill.setGst(rs.getDouble("orpr_gst"));
        bill.setPrice(rs.getDouble("orpr_price"));
        return bill;
    }
}

