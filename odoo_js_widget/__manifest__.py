# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    "name": "Odoo js Widget",
    "version": "16.0.1.0.0",
    "summary": "Widget",
    "sequence": 0,
    "website": "https://github.com/OCA/web",
    "depends": ["web", "sale"],
    "installable": True,
    "application": True,
    "author": "Ankit",
    "assets": {
        "web.assets_backend": [
            "odoo_js_widget/static/src/**/*",
        ],
    },
    "license": "LGPL-3",
}
