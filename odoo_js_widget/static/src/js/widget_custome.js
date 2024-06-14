/** @odoo-module **/

import {Component} from "@odoo/owl";
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

SaleOrderStock.template = "odoo_js_widget.available_stock_popup_custome";
export class TestStockWidget extends Component {
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
TestStockWidget.template = "odoo_js_widget.available_stock_custome";

TestStockWidget.components = {Popover: SaleOrderStock};
registry.category("view_widgets").add("widgetCustome", TestStockWidget);
