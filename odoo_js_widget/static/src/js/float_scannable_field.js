/** @odoo-module **/

import {Component} from "@odoo/owl";
import {FloatField} from "@web/views/fields/float/float_field";
import {registry} from "@web/core/registry";
import {usePopover} from "@web/core/popover/popover_hook";
export class SaleOrderStock extends Component {
    get method_test() {
        return this.this.props.InterfaceInfo.props.record.data.availabele_stock_test;
    }
    get dynamiccolor() {
        const classlist = "";
        return this.this.props.InterfaceInfo.props.record.data.availabele_stock_test <=
            0
            ? classlist + " bg-danger"
            : classlist + " bg-success";
    }
}

SaleOrderStock.template = "odoo_js_widget.available_stock_popup";
export class TestStockWidget extends FloatField {
    setup() {
        this.popover = usePopover();
    }
    checkstock(ev) {
        this.closePopover = this.popover.add(
            ev.currentTarget,
            this.constructor.components.Popover,
            {InterfaceInfo: this},
            {
                position: "top",
            }
        );
    }
    checkstockout() {
        this.closePopover();
    }
    get dynamiccolor() {
        const classlist = "ms-2 fa fa-arrows-alt";
        return this.this.props.record.data.availabele_stock_test <= 0
            ? classlist + " bg-danger"
            : classlist + " bg-success";
    }
}
TestStockWidget.template = "odoo_js_widget.available_stock";

TestStockWidget.components = {Popover: SaleOrderStock};
registry.category("fields").add("quentyofstock", TestStockWidget);
