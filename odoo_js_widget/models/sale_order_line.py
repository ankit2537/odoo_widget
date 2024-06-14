# Part of Odoo. See LICENSE file for full copyright and licensing details.


from odoo import fields, models


class SaleOrderLine(models.Model):
    _inherit = "sale.order.line"

    availabele_stock_test = fields.Float(compute="_compute_availabele_stock_test")

    def _compute_availabele_stock_test(self):
        for rec in self:
            if rec.product_id:
                rec.availabele_stock_test = rec.product_id.qty_available
            else:
                rec.availabele_stock_test = 0
